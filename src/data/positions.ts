"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function fetchPositions({ unique_code }: { unique_code: string }) {
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

  let { data: positions, error } = await supabase
    .from("positions")
    .select("*")
    .eq("election_unique_code", unique_code);

  if (error) {
    console.error(error);
    notFound();
  } else return positions ? positions : [];
}

export async function fetchSingleElection({
  unique_code,
  title,
}: {
  unique_code: string;
  title: string;
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

  let { data: position, error } = await supabase
    .from("positions")
    .select("*")
    .match({ title: title, election_unique_code: unique_code })
    .limit(1)
    .single()

    if (error || !position) {
      console.error(error);
      notFound()

    } else return position

}
