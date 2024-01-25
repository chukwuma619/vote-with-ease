"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { notFound, redirect } from "next/navigation";

export async function fetchCandidate(unique_code: string, title: string) {
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
    let { data: election, error: ElectionError } = await supabase
      .from("elections")
      .select("id")
      .eq("unique_code", unique_code)
      .limit(1)
      .single();

    if (ElectionError || election == null) {
      console.error(ElectionError);
      notFound();
    }

    let { data: position, error: posErr } = await supabase
      .from("positions")
      .select("id")
      .match({ election_id: election?.id, title: title })
      .limit(1)
      .single();

    if (posErr || position == null) {
      console.error(posErr);
      notFound();
    }

    let { data: candidates, error } = await supabase
      .from("candidates")
      .select("*")
      .eq("position", position.id);

    if (error) {
      console.error(error);
      throw error;
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    let { data: election, error: ElectionError } = await supabase
      .from("elections")
      .select("id")
      .eq("unique_code", unique_code)
      .limit(1)
      .single();

    if (ElectionError || election == null) {
      console.error(ElectionError);
      notFound();
    }

    let { data: position, error: posErr } = await supabase
      .from("positions")
      .select("id")
      .match({ election_id: election?.id, title: pos_title })
      .limit(1)
      .single();

    if (posErr || position == null) {
      console.error(posErr);
      notFound();
    }

    let { data: candidate, error } = await supabase
      .from("candidates")
      .select("*")
      .match({ position: position.id, full_name: cand_name })
      .limit(1)
      .single();

    if (error || candidate == null) {
      console.error(error);
      notFound();
    }

    return candidate;
  }
}
