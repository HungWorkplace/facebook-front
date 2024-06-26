"use client";

import { cn } from "@/lib/utils";
import { useFormState, useFormStatus } from "react-dom";
import * as actions from "@/actions/auth";
import { InputField } from "./login/InputField";
import { Button } from "@/components/ui/custom/button";

interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className }: LoginFormProps) {
  const [formState, action] = useFormState(actions.login, { errors: {} });

  const emailError = formState?.errors?.email;
  const passwordError = formState?.errors?.password;
  const responseError = formState?.errors?.response;

  return (
    <form action={action} className={cn("", className)}>
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

      <ButtonSubmit />
    </form>
  );
}

// Must split the Button when using useFormStatus
function ButtonSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isLoading={pending}
      className="mt-4 h-12 w-full text-xl font-semibold"
    >
      Log in
    </Button>
  );
}
