"use client";

import { cn } from "@/lib/utils";
import { PiWarningFill } from "react-icons/pi";
import { useFormState, useFormStatus } from "react-dom";
import * as actions from "@/actions/auth";

interface LogInFormProps {}

export default function LogInForm() {
  const [formState, action] = useFormState(actions.login, { errors: {} });

  const emailError = formState.errors.email;
  const passwordError = formState.errors.password;
  const responseError = formState.errors.response;

  return (
    <form action={action} className="w-96">
      {responseError && (
        <p className="text-center font-roboto text-sm text-red-600">
          {responseError}
        </p>
      )}
      <div className="relative">
        <input
          type="email"
          name="email"
          autoFocus
          placeholder="Email address"
          className={cn(
            "h-10 w-full rounded-md border px-4 py-6 text-base outline-none placeholder:text-black/60 focus:border-primary",
            { "border-red-500 focus:border-red-500": emailError },
          )}
        />

        {emailError && (
          <PiWarningFill
            className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
            size={22}
          />
        )}
      </div>

      {emailError && (
        <div className="mt-1">
          {emailError.map((message, i) => (
            <p key={i} className="text-left font-roboto text-sm text-red-600">
              {message}
            </p>
          ))}
        </div>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        className={cn(
          "mt-3",
          "h-10 w-full rounded-md border px-4 py-6 text-base outline-none placeholder:text-black/60 focus:border-primary",
          { "border-red-500 focus:border-red-500": passwordError },
        )}
      />

      {passwordError && (
        <div className="mt-1">
          {passwordError.map((message, i) => (
            <p key={i} className="text-left font-roboto text-sm text-red-600">
              {message}
            </p>
          ))}
        </div>
      )}

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
