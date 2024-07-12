import { FormField } from "@/components/ui/form";
import { type FormSchema } from "@/lib/formSchema";
import { type Control } from "react-hook-form";
import { InputField } from "./InputField";

interface FormNameType {
  control: Control<FormSchema>;
  errors: any;
}

export function FormName({ control, errors }: FormNameType) {
  return (
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
  );
}
