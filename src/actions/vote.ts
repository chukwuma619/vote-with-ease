"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { unstable_noStore as noStore } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const VoteSchema = z.object({
  position: z.string({ required_error: "Please select a candidate to vote" }),
});

type State =
  | {
      errors: {
        position?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    };
export async function Vote(
  unique_code: string,
  pos_title: string,
  prevState: State | undefined,
  formData: FormData
) {}
