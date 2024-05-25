import { Slot } from "@radix-ui/react-slot";
import { DialogHeader, DialogTitle } from "../custom/dialog";
import { cn } from "@/lib/utils";

interface TitleProps {
  iconSide?: "left" | "right";
  title: string;
  children: React.ReactNode;
}

// # Component
export default function Title({
  title,
  iconSide = "right",
  children,
}: TitleProps) {
  return (
    <DialogHeader className="relative flex h-[3.75rem] items-center justify-center border-b">
      <DialogTitle className=" text-xl font-bold">{title}</DialogTitle>

      <Slot
        className={cn(
          "press absolute top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-secondary-button-background text-secondary-icon hover:bg-hover-icon-button",
          {
            "left-4": iconSide === "left",
            "right-4": iconSide === "right",
          },
        )}
      >
        {children}
      </Slot>
    </DialogHeader>
  );
}
