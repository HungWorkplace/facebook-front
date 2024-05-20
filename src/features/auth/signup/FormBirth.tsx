import { FormField, FormMessage } from "@/components/ui/form";
import { type FormSchema } from "@/lib/FormSchema";
import { type Control } from "react-hook-form";
import SelectField from "./SelectField";

interface FormBirthType {
  control: Control<FormSchema>;
  errors: any;
}

export function FormBirth({ control, errors }: FormBirthType) {
  return (
    <div className="pt-1">
      <p className="mb-2 text-xs font-medium text-gray-700">Date of birth</p>
      <div className="flex gap-3">
        <FormField
          control={control}
          name="birthday.day"
          render={({ field }) => (
            <SelectField field={field} className="flex-1" />
          )}
        />
        <FormField
          control={control}
          name="birthday.month"
          render={({ field }) => (
            <SelectField field={field} className="flex-1" />
          )}
        />
        <FormField
          control={control}
          name="birthday.year"
          render={({ field }) => (
            <SelectField field={field} className="flex-1" />
          )}
        />
      </div>
      {errors.birthday && (
        <FormMessage className="text-red-500">
          {errors.birthday.message}
        </FormMessage>
      )}
    </div>
  );
}
