"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function fetchPositionByElectionUniqueCode({
  unique_code,
}: {
  unique_code: string;
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
    let { data: election, error: elctionError } = await supabase
      .from("elections")
      .select("id")
      .eq("unique_code", unique_code)
      .limit(1)
      .single();

    if (elctionError) {
      console.error(elctionError);
      notFound();
    }

    if (election) {
      let { data: positions, error } = await supabase
        .from("positions")
        .select("*")
        .eq("election_id", election.id);
      if (error) {
        console.error(error);
        throw new Error(error.message);
      } else return positions ? positions : [];
    }
  }
}

export async function fetchElectionByUniqueCodeAndPositionTitle({
  unique_code,
  title,
}: {
  unique_code: string,
  title:string,
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
      .select("title, start_date, end_date, unique_code")
      .eq("unique_code", unique_code)
      .limit(1)
      .single();

    if (error) {
      console.error(error);
      notFound();
    } else return election;
  }
}
