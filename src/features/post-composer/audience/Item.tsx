import { RadioGroupItem } from "@/components/ui/radio-group";

interface ItemProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  value: string;
}

// # Component
export default function Item({
  children,
  title,
  description,
  value,
}: ItemProps) {
  return (
    <label
      htmlFor={value}
      className="hover:bg-hover-item-radio relative flex cursor-pointer items-center justify-between gap-3 rounded-xl px-2 py-[0.375rem]"
    >
      {/* Icon */}
      <span className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-secondary-button-background">
        {children}
      </span>

      {/* Text */}
      <div className="flex-1">
        <p className="font-semibold text-primary-foreground">{title}</p>
        {description && (
          <p className="text-sm text-secondary-foreground">{description}</p>
        )}
      </div>
      {/* Right side*/}
      {/* Check */}
      <RadioGroupItem
        value={value}
        id={value}
        className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 border-2"
      />
    </label>
  );
}
