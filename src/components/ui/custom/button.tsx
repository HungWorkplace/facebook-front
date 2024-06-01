import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive: "text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        gray: "press bg-hover-item-radio text-primary-foreground hover:bg-hover-icon-button",
        link: "text-primary underline-offset-4 hover:underline",
        action:
          "press flex rounded-full p-0 text-secondary-icon hover:bg-hover-item-radio",
      },
      background: {
        root: "bg-background",
        primary: "bg-primary",
        destructive: "bg-destructive",
        secondary: "bg-secondary",
        accent: "bg-accent",
        "secondary-button-background": "bg-secondary-button-background",
      },
      hover: {
        tokyo: "hover:bg-hover-icon-button",
        beijing: "hover:bg-hover-item-radio",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-9 w-9",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, background, hover, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, background, hover, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
