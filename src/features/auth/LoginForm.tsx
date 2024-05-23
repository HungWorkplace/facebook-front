"use client";

import { cn } from "@/lib/utils";
import { PiWarningFill } from "react-icons/pi";
import { useFormState, useFormStatus } from "react-dom";
import * as actions from "@/actions/auth";
import { useRouter } from "next/navigation";

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

interface InputFieldType {
  type: string;
  autoFocus?: boolean;
  placeholder: string;
  error: string[] | undefined;
  className?: string;
}

function InputField({
  type,
  error,
  placeholder,
  autoFocus = false,
  className,
}: InputFieldType) {
  return (
    <div className={className}>
      <div className="relative">
        <input
          type={type}
          name={type}
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={cn(
            "h-10 w-full rounded-md border px-4 py-6 text-base outline-none placeholder:text-black/60 focus:border-primary",
            { "border-red-500 focus:border-red-500": error },
          )}
        />

        {error && (
          <PiWarningFill
            className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
            size={22}
          />
        )}
      </div>

      {error && (
        <div className="mt-1">
          {error.map((message, i) => (
            <p key={i} className="text-left font-roboto text-sm text-red-600">
              {message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
