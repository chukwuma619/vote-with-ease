"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function fetchVoters({ unique_code }: { unique_code: string }) {
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
    let { data: eligible_voters, error } = await supabase
      .from("eligible_voters")
      .select("*")
      .eq("election_unique_code", unique_code);

    if (error) console.error(error);
    else return eligible_voters ? eligible_voters : [];
  }
}

export async function fetchSingleVoter({
  unique_code,
  id,
}: {
  unique_code: string;
  id: string;
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
    let { data: eligible_voter, error } = await supabase
      .from("eligible_voters")
      .select("*")
      .match({ election_unique_code: unique_code, id: id })
      .limit(1)
      .single();

    if (error || !eligible_voter) {
      console.error(error);
      notFound();
    } else return eligible_voter;
  }
}
