import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormSchema } from "@/lib/FormSchema";
import { type ControllerRenderProps } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button, buttonVariants } from "@/components/ui/custom/button";
import { cn } from "@/lib/utils";

interface RadioFieldType {
  field: ControllerRenderProps<FormSchema, any>;
  className?: string;
}

// # Component
export default function RadioField({ field, className }: RadioFieldType) {
  return (
    <FormItem className="pt-1">
      <FormLabel className="text-xs text-gray-700">Gender</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex"
        >
          <Item className="flex-1" label="Male" value="male" />
          <Item className="flex-1" label="Female" value="female" />
          <Item className="flex-1" label="Other" value="other" />
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

interface ItemProps {
  className?: string;
  label: string;
  value: string;
}

// # Others
function Item({ className, label, value }: ItemProps) {
  return (
    <FormItem
      className={cn(
        buttonVariants({ variant: "outline" }),
        "flex items-center justify-between space-x-3 space-y-0",
        className,
      )}
    >
      <FormLabel className="flex-1 font-normal">{label}</FormLabel>
      <FormControl>
        <RadioGroupItem value={value} />
      </FormControl>
    </FormItem>
  );
}
