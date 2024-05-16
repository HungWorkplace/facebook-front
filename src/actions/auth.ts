"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";
import axios from "axios";
import { url } from "@/lib/urls";

interface LoginState {
  errors: {
    email?: string[];
    password?: string[];
    response?: string;
  };
}

type ResponseSuccess = {
  message: string;
  data: {
    user: any;
    token: string;
  };
};

type ResponseError = {
  error: string;
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
  formState: LoginState,
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

  try {
    const res = await axios.post(url.auth.login, userTyping.data);

    // if it not success
    if (res.status !== 200) {
      const data = res.data as ResponseError;

      return { errors: { response: data.error } };
    }

    // if it success
    const data = res.data as ResponseSuccess;

    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    cookies().set("jwt", data.data.token, { expires, httpOnly: true });
  } catch (error) {
    return { errors: { response: "An error occurred. Please try again." } };
  }

  redirect("/");
}

export async function logout() {
  cookies().delete("jwt");
  redirect("/");
}
