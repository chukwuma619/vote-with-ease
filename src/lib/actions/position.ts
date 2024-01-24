"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";
import { Database } from "@/types/database.types";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { generateRandomString } from "../utils";

const PositionSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
});

const CreatePosition = PositionSchema.omit({ id: true });
const UpdatePosition = PositionSchema.omit({ id: true });

type State =
  | {
      errors: {
        title?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    };
export async function createPosition(
  unique_code: string,
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

  const validatedFields = CreatePosition.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title } = validatedFields.data;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    let { data: election, error: elctionError } = await supabase
      .from("elections")
      .select("id, user_id")
      .eq("unique_code", unique_code)
      .limit(1)
      .single();

    if (elctionError) {
      console.error(elctionError);
      notFound();
    }

    const { error } = await supabase
      .from("positions")
      .insert({
        title: title,
        election_id: election?.id,
      })
      .select();

    if (error) {
      console.error(error);
      return {
        message: error.message,
      };
    }

    redirect(`/dashboard/election/${unique_code}/position/`);
  }
}

export async function updatePosition(
  election_id: string,
  unique_code: string,
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

  const validatedFields = UpdatePosition.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title } = validatedFields.data;
  

  const { data, error } = await supabase
    .from("positions")
    .update({
      title: title,
    })
    .eq("election_id", election_id)
    .select();

  if (error) {
    console.error(error);
    return {
      message: error.message,
    };
  }

  redirect(`/dashboard/election/${unique_code}/position/`);
}

export async function deletePositionByTitle(title: string) {
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

  const { error } = await supabase
    .from("positions")
    .delete()
    .eq("title", title);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
