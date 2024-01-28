"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";
import { Database } from "@/types/database.types";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

const PositionSchema = z.object({
  title: z.string().min(1),
});

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

  const validatedFields = PositionSchema.safeParse({
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
    const { error } = await supabase
      .from("positions")
      .insert({
        title: title,
        election_unique_code: unique_code,
      })
      .select();

    if (error) {
      console.error(error);
      return {
        message: error.message,
      };
    }
    revalidatePath(`/dashboard/election/${unique_code}/position/`);
    redirect(`/dashboard/election/${unique_code}/position/`);
  }
}

export async function updatePosition(
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

  const validatedFields = PositionSchema.safeParse({
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
  let { data: election } = await supabase
    .from("elections")
    .select("*")
    .eq("unique_code", unique_code)
    .limit(1)
    .single();
  if (!election) return { message: "Election does not exist" };

  if (user && election.user_id === user.id) {
    const { data, error } = await supabase
      .from("positions")
      .update({
        title: title,
      })
      .match({ title: pos_title, election_unique_code: unique_code })
      .select();

    if (error) {
      console.error(error);
      return {
        message: error.message,
      };
    }
  } else return { message: "You are not permitted" };
  revalidatePath(`/dashboard/election/${unique_code}/position/`);
  redirect(`/dashboard/election/${unique_code}/position/`);
}

export async function deletePosition(unique_code: string, title: string) {
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
    .match({ title: title, election_unique_code: unique_code });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  revalidatePath(`/dashboard/election/${unique_code}/position/`);
  redirect(`/dashboard/election/${unique_code}/position/`);
}
