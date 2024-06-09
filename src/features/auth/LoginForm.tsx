"use client";

import { cn } from "@/lib/utils";
import { useFormState } from "react-dom";
import * as actions from "@/actions/auth";
import { useRouter } from "next/navigation";
import { InputField } from "./login/InputField";

export default function LoginForm() {
  const [formState, action] = useFormState(actions.login, { errors: {} });
  const router = useRouter();

  const emailError = formState.errors?.email;
  const passwordError = formState.errors?.password;
  const responseError = formState.errors?.response;

  if (formState.user) {
    router.push("/");
  }

  return (
    <form action={action} className="w-96">
      {responseError && (
        <p className="text-center font-roboto text-sm text-red-600">
          {responseError}
        </p>
      )}

      <InputField
        type="email"
        placeholder="Email address"
        error={emailError}
        autoFocus
      />

      <InputField
        type="password"
        placeholder="Password"
        error={passwordError}
        className="mt-3"
      />

      <button
        type="submit"
        className={cn(
          "mt-4 flex h-12 w-full items-center justify-center rounded-md bg-primary text-center text-xl font-semibold text-white hover:bg-primary/90",
          { pending: "cursor-not-allowed opacity-70" },
        )}
      >
        Log in
      </button>
    </form>
  );
}
