"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";
import { url } from "@/MVC/routes";
import { User } from "@/types/model";

type LoginState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        response?: string;
      };
    }
  | undefined;

type ResponseSuccess = {
  message: string;
  user: User;
  token: string;
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[a-z]/, {
      message: "Password must contain at least 1 lowercase letter.",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least 1 number." })
    .regex(/[@$!%*?&#]/, {
      message: "Password must contain at least 1 special character.",
    }),
});

// Must have a return type of Promise<LoginState>
export async function login(
  _formState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  // use safeParse
  const userTyping = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!userTyping.success) {
    return { errors: userTyping.error.flatten().fieldErrors };
  }

  // Get the data from the form state and send it to the server
  let data: ResponseSuccess;
  try {
    const res = await fetch(url.auth.post.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userTyping.data),
    });

    if (!res.ok) {
      return {
        errors: {
          response: "Email or password is incorrect. Please try again.",
        },
      };
    }

    data = await res.json();

    // set token to the cookie
    const day = process.env.JWT_EXPIRES_DAY || 30;
    const expires = new Date(Date.now() + Number(day) * 24 * 60 * 60 * 1000);
    cookies().set("jwt", data.token, {
      expires,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { response: error.message } };
    }
    return { errors: { response: "An error occurred. Please try again." } };
  }

  // Redirect to the home page
  if (data.user) {
    redirect("/");
  }
}

export async function logout() {
  cookies().delete("jwt");
  redirect("/login");
}
