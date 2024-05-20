import { FormControl, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormSchema } from "@/lib/FormSchema";
import { type ControllerRenderProps } from "react-hook-form";

interface SelectFieldType {
  field: ControllerRenderProps<FormSchema, any>;
  className?: string;
}

const startYear = 1900;
const endYear = new Date().getFullYear() - 5;

const contentTypeMap = {
  day: Array.from({ length: 31 }, (_, index) => index + 1),
  month: Array.from({ length: 12 }, (_, index) => {
    // new Date(<year>, <month>)
    const month = new Date(0, index).toLocaleString("default", {
      month: "short",
    });
    return { label: month, value: index + 1 };
  }),
  year: Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => endYear - index,
  ),
};

// # Component
export default function SelectField({ field, className }: SelectFieldType) {
  const contentType = field.name.split(".")[1] as "day" | "month" | "year";

  return (
    <FormItem className={className}>
      <FormControl>
        <Select
          onValueChange={(value) => field.onChange(Number(value))}
          defaultValue={field.value.toString()}
        >
          <SelectTrigger className="rounded">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {contentType === "month" &&
              contentTypeMap.month.map((item) => (
                <SelectItem key={item.value} value={item.value.toString()}>
                  {item.label}
                </SelectItem>
              ))}

            {contentType !== "month" &&
              contentTypeMap[contentType].map((item) => (
                <SelectItem key={item} value={item.toString()}>
                  {item}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </FormControl>
    </FormItem>
  );
}
