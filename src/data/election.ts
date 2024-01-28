"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { unstable_noStore as noStore } from 'next/cache';
import { notFound } from "next/navigation";




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
    noStore()
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
        notFound()

      } else return election;
    }
  }