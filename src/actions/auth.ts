"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";
import axios from "axios";
import { url } from "@/utils/urls";
import { User } from "@/types/api";

type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
    response?: string;
  };
  user?: User;
};

type ResponseSuccess = {
  message: string;
  user: User;
  token: string;
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

  // Get the data from the form state and send it to the server
  try {
    const res = await axios.post(url.auth.post.login, userTyping.data);

    // if it not success
    if (res.status !== 200) {
      const data = res.data as ResponseError;

      return { errors: { response: data.error } };
    }

    // if it success, user is logged in and we have the user data
    const data = res.data as ResponseSuccess;

    // set token to the cookie
    const day = process.env.JWT_EXPIRES_DAY || 30;
    const expires = new Date(Date.now() + Number(day) * 24 * 60 * 60 * 1000);
    cookies().set("jwt", data.token, { expires, httpOnly: true });

    return { user: data.user };
  } catch (error) {
    return { errors: { response: "An error occurred. Please try again." } };
  }
}

export async function logout() {
  cookies().delete("jwt");
  redirect("/login");
}
