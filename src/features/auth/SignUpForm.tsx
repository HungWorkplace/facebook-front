"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type Control, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { InputField } from "./signup/InputField";
import { FormSchema } from "@/lib/formSchema";

// # Component
export default function SignUpForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = (values: FormSchema) => {
    console.log("Hello");
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex gap-3">
          <FormField
            control={control}
            name="firstName"
            render={({ field }) => (
              <InputField
                field={field}
                type="text"
                placeholder="First name"
                error={errors.firstName}
                message={false}
                className="flex-1"
              />
            )}
          />
          <FormField
            control={control}
            name="surname"
            render={({ field }) => (
              <InputField
                field={field}
                type="text"
                placeholder="Surname"
                error={errors.surname}
                message={false}
                className="flex-1"
              />
            )}
          />
        </div>

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <InputField
              field={field}
              type="email"
              placeholder="Email address"
              error={errors.email}
            />
          )}
        />
        {/* 
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <InputField
              field={field}
              type="password"
              placeholder="New password"
              error={errors.password}
            />
          )}
        /> */}

        {/* birthday */}

        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}
