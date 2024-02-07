"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { unstable_noStore as noStore } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

export async function fetchAuthElections() {
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
    let { data: elections, error } = await supabase
      .from("elections")
      .select("*")
      .eq("user_id", user.id);
    if (error) {
      console.error(error);
      throw new Error(error.message);
    } else return elections ? elections : [];
  }
}

export async function fetchSingleElection({
  unique_code,
}: {
  unique_code: string;
}) {
  noStore();
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
    let { data: election, error } = await supabase
      .from("elections")
      .select("*")
      .eq("unique_code", unique_code)
      .limit(1)
      .single();

    if (error || !election) {
      console.error(error);
      notFound();
    } else return election;
  }
}

const ElectionSchema = z.object({
  title: z.string(),
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
export async function validatedElection(
  prevState: State | undefined,
  formData: FormData
) {
  "use server";

  const validatedFields = ElectionSchema.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { title } = validatedFields.data;

  noStore();
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

  let { data: election, error } = await supabase
    .from("elections")
    .select("*")
    .eq("unique_code", title)
    .limit(1)
    .single();

  if (error) {
    console.log(error);
    if (
      error.message == "JSON object requested, multiple (or no) rows returned"
    ) {
      return { message: "election does not exist" };
    }
    return { message: error.message };
  }

  if (user) {
    let { data: eligible_voter, error } = await supabase
      .from("eligible_voters")
      .select("*")
      .match({
        election_unique_code: election?.unique_code,
        email: user.email,
      })
      .limit(1)
      .single();

    if (error) {
      console.log(error);
      if (
        error.message == "JSON object requested, multiple (or no) rows returned"
      ) {
        return { message: "your not eligble to vote" };
      }
      return { message: error.message };
    }

    console.log(eligible_voter);

    if (eligible_voter) {
      redirect(`/dashboard/vote/${election?.unique_code}`);
    } else return { message: "Your not eligible to vote" };
  }
}

export async function isEligible({ code }: { code: string }) {
  noStore();
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

  let { data: election, error } = await supabase
    .from("elections")
    .select("*")
    .eq("unique_code", code)
    .limit(1)
    .single();

  if (error) notFound();

  if (user) {
    let { data: eligible_voter, error } = await supabase
      .from("eligible_voters")
      .select("*")
      .match({
        election_unique_code: election?.unique_code,
        email: user.email,
      })
      .limit(1)
      .single();

    if (error) redirect(`/dashboard/vote/`);

    if (!eligible_voter) redirect(`/dashboard/vote/`);
    else return true;
  }
}
