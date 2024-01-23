"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";
import { Database } from "@/types/database.types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { generateRandomString } from "../utils";

const ElectionSchema = z.object({
  id: z.string(),
  end_date: z.coerce
    .date({
      required_error: "Please select a date and time",
      invalid_type_error: "That's not a date!",
    })
    .min(new Date(), { message: "End date cannot be less than today" }),
  start_date: z.coerce
    .date({
      required_error: "Please select a date and time",
      invalid_type_error: "That's not a date!",
    })
    .min(new Date(), { message: "Start date cannot be less than today" }),
  title: z.string(),
});

const CreateElection = ElectionSchema.omit({ id: true });
const UpdateElection = ElectionSchema.omit({ id: true });

type State =
  | {
      errors: {
        end_date?: string[] | undefined;
        start_date?: string[] | undefined;
        title?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    };

export async function creatElection(
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

  const validatedFields = CreateElection.safeParse({
    end_date: formData.get("end_date"),
    start_date: formData.get("start_date"),
    title: formData.get("title"),
  });


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { start_date, title, end_date } = validatedFields.data;
  const unique_code = generateRandomString();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { error } = await supabase
      .from("elections")
      .insert({
        end_date: end_date.toISOString(),
        title: title,
        start_date: start_date.toISOString(),
        user_id: user.id,
        unique_code: unique_code,
      })
      .select();

    if (error) {
      console.error(error);
      return {
        message: error.message,
      };
    }

    revalidatePath("/dashboard/election");
    redirect("/dashboard/election");
  }
}

export async function updateElection(
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

  const validatedFields = UpdateElection.safeParse({
    end_date: formData.get("end_date"),
    start_date: formData.get("start_date"),
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { start_date, title, end_date } = validatedFields.data;

  console.log(start_date, title, end_date);
  
  
  const { error } = await supabase
    .from("elections")
    .update({
      start_date: start_date.toISOString(),
      title: title,
      end_date: end_date.toISOString(),
    })
    .eq("unique_code", unique_code)
    .select();

  if (error) {
    console.error(error);
    return {
      message: error.message,
    };
  }

  revalidatePath("/dashboard/election");
  redirect("/dashboard/election");
}

export async function deleteElectionByUniqueCode(unique_code: string) {
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
    .from("elections")
    .delete()
    .eq(unique_code, unique_code);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
