"use server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { z } from "zod";
import { Database } from "@/types/database.types";


const UserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, {
    message:
      "Weak password! Please ensure it has at least 6 characters, one uppercase letter, one lowercase letter, and one digit.",
  }),
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
});

export type State =
  | {
      errors: {
        email?: string[] | undefined;
        password?: string[] | undefined;
        name?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    }| undefined;

export async function signUpUser(prevState: State, formData: FormData) {
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

  const validatedFields = UserSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password, name } = validatedFields.data;

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
      },
    },
  });

  if (error) return { message: error.message };
}

export type LoginState =
  | {
      errors: {
        email?: string[] | undefined;
        password?: string[] | undefined;
      };
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    }| undefined;

const LoginSchema = UserSchema.omit({name:true})
export async function signInUser(
  prevState: LoginState,
  formData: FormData
) {
  "use server";

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

  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {email, password} = validatedFields.data

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) return { message: error.message };
}

export async function signOutUser() {
  "use server";

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

  const { error } = await supabase.auth.signOut({ scope: "local" });
  if (error) return { message: error.message };
}
