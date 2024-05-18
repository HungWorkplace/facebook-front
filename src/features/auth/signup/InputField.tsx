import { type FieldError } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PiWarningFill } from "react-icons/pi";

interface InputFieldType {
  type: string;
  placeholder: string;
  error: FieldError | undefined;
  className?: string;
  field: any;
  message?: boolean;
}

export function InputField({
  field,
  type,
  error,
  placeholder,
  className,
  message = true,
}: InputFieldType) {
  return (
    <FormItem className={className}>
      <FormControl>
        <div className="relative">
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            className={cn(
              "peer h-auto w-full rounded border px-3 py-2 text-base outline-none",
              { "border-red-500": error },
            )}
          />

          {error && (
            <PiWarningFill
              className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
              size={22}
            />
          )}
        </div>
      </FormControl>
      {message && <FormMessage />}
    </FormItem>
  );
}
