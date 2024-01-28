"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";
import { Database } from "@/types/database.types";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { generateRandomString } from "../lib/utils";
import { randomUUID } from "crypto";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const CadidateSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name must contain at least 1 character(s) "),
  dept: z
    .string({ required_error: "Dept is required" })
    .min(1, "Dept must contain at least 1 character(s) "),
  level: z
    .string({ required_error: "Level is required" })
    .min(1, "Level must contain at least 1 character(s) "),
});

const CreateCandidateSchema = CadidateSchema.extend({
  avatar: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "Only .jpg, .jpeg, .png and .webp formats are supported."),
});
const UpdatePositionSchema = CadidateSchema.extend({
  avatar: z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, "Only .jpg, .jpeg, .png and .webp formats are supported."),
});

type State =
  | {
      errors: {
        title?: string[] | undefined;
        dept?: string[] | undefined;
        level?: string[] | undefined;
        avatar?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    };
export async function createCandidate(
  unique_code: string,
  pos_title: string,
  prevState: State | undefined,
  formData: FormData
) {
  const cookieStore = cookies();

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  const validatedFields = CreateCandidateSchema.safeParse({
    name: formData.get("name"),
    dept: formData.get("dept"),
    level: formData.get("level"),
    avatar: formData.get("avatar"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, dept, level, avatar } = validatedFields.data;

  const fileNAme = randomUUID() + "-" + avatar.name;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: position, error: posErr } = await supabase
      .from("positions")
      .select("*")
      .match({ title: pos_title, election_unique_code: unique_code })
      .limit(1)
      .single();

    if (posErr || !position) {
      console.error(posErr);
      return { message: "Error fetching position" };
    }

    const { data: dt, error: er } = await supabase.storage
      .from("avatars")
      .upload(fileNAme, avatar);

    if (er) throw er;

    const { data: imagUrl } = supabase.storage
      .from("avatars")
      .getPublicUrl(fileNAme);

    const { data, error } = await supabase
      .from("candidates")
      .insert({
        full_name: name,
        position_id: position.id,
        department: dept,
        level: level,
        photo_url: imagUrl.publicUrl,
      })
      .select();

    if (error) {
      console.error(error);
      return {
        message: error.message,
      };
    }

    revalidatePath(
      `/dashboard/election/${unique_code}/position/${pos_title}/candidate`
    );
    redirect(
      `/dashboard/election/${unique_code}/position/${pos_title}/candidate`
    );
  }
}

export async function updateCandidate(
  unique_code: string,
  pos_title: string,
  cand_name: string,
  prevState: State | undefined,
  formData: FormData
) {
  const cookieStore = cookies();

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  const validatedFields = UpdatePositionSchema.safeParse({
    name: formData.get("name"),
    dept: formData.get("dept"),
    level: formData.get("level"),
    avatar: formData.get("avatar"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, dept, level, avatar } = validatedFields.data;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: election } = await supabase
    .from("elections")
    .select("*")
    .eq("unique_code", unique_code)
    .limit(1)
    .single();
  if (!election) return { message: "Election does not exist" };

  if (user && election.user_id === user.id) {
    let { data: position, error } = await supabase
      .from("positions")
      .select("*")
      .match({ title: pos_title, election_unique_code: unique_code })
      .limit(1)
      .single();

    if (error || !position) {
      console.error(error);
      return { message: "Error fetching position" };
    } else {
      let { error } = await supabase
        .from("candidates")
        .update({ department: dept, full_name: name, level: level })
        .match({ position_id: position.id, full_name: cand_name })
        .select();

      if (error) {
        console.error(error);
        return { message: "Error updating candidate" };
      }
    }

    redirect(
      `/dashboard/election/${unique_code}/position/${pos_title}/candidate`
    );
  }
}

export async function deleteCandidate(
  unique_code: string,
  pos_title: string,
  cand_name: string
) {
  const cookieStore = cookies();

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: election } = await supabase
    .from("elections")
    .select("*")
    .eq("unique_code", unique_code)
    .limit(1)
    .single();
  if (!election) return { message: "Election does not exist" };

  if (user && election.user_id === user.id) {
    let { data: position, error } = await supabase
      .from("positions")
      .select("*")
      .match({ title: pos_title, election_unique_code: unique_code })
      .limit(1)
      .single();

      console.log(unique_code, pos_title, cand_name);
    if (error || !position) {
      console.error(error);
      return { message: "Error fetching position" };
    } else {
      let { error } = await supabase
        .from("candidates")
        .delete()
        .match({ position_id: position.id, full_name: cand_name });

      if (error) {
        console.error(error);
        return { message: "Error deleting candidate" };
      }
    }

    revalidatePath(
      `/dashboard/election/${unique_code}/position/${pos_title}/candidate`
    );
    redirect(
      `/dashboard/election/${unique_code}/position/${pos_title}/candidate`
    );
  }
}
