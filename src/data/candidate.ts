"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { notFound, redirect } from "next/navigation";

export async function fetchCandidates(unique_code: string, title: string) {
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

  let { data: position, error } = await supabase
    .from("positions")
    .select("*")
    .match({ title: title, election_unique_code: unique_code })
    .limit(1)
    .single();

  if (error || !position) {
    console.error(error);
    notFound();
  } else {
    let { data: candidates, error } = await supabase
      .from("candidates")
      .select("*")
      .eq("position_id", position.id);

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return candidates ? candidates : [];
  }
}

export async function fetchSingleCandidate({
  unique_code,
  pos_title,
  cand_name,
}: {
  unique_code: string;
  pos_title: string;
  cand_name: string;
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

  let { data: position, error } = await supabase
    .from("positions")
    .select("*")
    .match({ title: pos_title, election_unique_code: unique_code })
    .limit(1)
    .single();

  if (error || !position) {
    console.error(error);
    notFound();
  } else {
    let { data: candidate, error } = await supabase
      .from("candidates")
      .select("*")
      .match({ position_id: position.id, full_name: cand_name })
      .limit(1)
      .single();

    if (error || !candidate) {
      console.error(error);
      notFound();
    } else return candidate;
  }
}
