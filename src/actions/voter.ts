"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";
import { Database } from "@/types/database.types";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

const VotersSchema = z.object({
  email: z.string().email(),
});

type State =
  | {
      errors: {
        email?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    };

export async function addVoter(
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

  const validatedFields = VotersSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    let { data, error: checkErr } = await supabase
      .from("eligible_voters")
      .select("*")
      .match({ email: email, election_unique_code: unique_code });

    if (data && data.length !== 0) return { message: "Email already exist" };

    let { error } = await supabase
      .from("eligible_voters")
      .insert({ email: email, election_unique_code: unique_code })
      .select();

    if (error) {
      console.error(error);
      return { message: error?.message };
    }

    revalidatePath(`/dashboard/election/${unique_code}/voters`);
    redirect(`/dashboard/election/${unique_code}/voters`);
  }
}

export async function updateVoter(
  unique_code: string,
  uuid: string,
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

  const validatedFields = VotersSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

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
    let { error } = await supabase
      .from("eligible_voters")
      .update({ email: email })
      .eq("id", uuid)
      .select();

    if (error) {
      console.error(error);
      return { message: error?.message };
    }

    revalidatePath(`/dashboard/election/${unique_code}/voters`);
    redirect(`/dashboard/election/${unique_code}/voters`);
  }
}

export async function deleteVoter({
  unique_code,
  uuid,
  }: {
  unique_code: string;
  uuid: string;
}) {
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

  if (user) {
    const { error } = await supabase.from("eligible_voters").delete().eq("id", uuid);

    if (error) console.error(error);
    throw error;
  }

  revalidatePath(`/dashboard/election/${unique_code}/voters`);
}
