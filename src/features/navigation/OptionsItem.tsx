import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface RootProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

// # Component
function Root({ children, ...props }: RootProps) {
  return (
    <button
      className="inline-flex w-full items-center gap-3 rounded-lg p-2 outline-none hover:bg-hover-banner"
      {...props}
    >
      {children}
    </button>
  );
}

function Icon({ children }: PropsWithChildren) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4e6ec] text-[#1c1d21]">
      {children}
    </span>
  );
}

interface TextProps {
  heading: string;
  description?: string;
}

function Text({ heading, description }: TextProps) {
  return (
    <div className="text-left">
      <h2 className="font-semibold">{heading}</h2>
      {description && (
        <p className="text-sm text-secondary-foreground">{description}</p>
      )}
    </div>
  );
}

export const OptionsItem = {
  Root,
  Icon,
  Text,
};
