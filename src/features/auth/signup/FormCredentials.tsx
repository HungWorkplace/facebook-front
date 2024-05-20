import { FormField } from "@/components/ui/form";
import { type FormSchema } from "@/lib/FormSchema";
import { type Control } from "react-hook-form";
import { InputField } from "./InputField";

interface FormCredentialsType {
  control: Control<FormSchema>;
  errors: any;
}

// # Component
export default function FormCredentials({
  control,
  errors,
}: FormCredentialsType) {
  return (
    <>
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
      />
    </>
  );
}
