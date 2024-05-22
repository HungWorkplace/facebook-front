import { cn } from "@/lib/utils";

interface WrapProps {
  children: React.ReactNode;
  className?: string;
}

// # Component
function Wrap({ children, className }: WrapProps) {
  return <div className={cn("px-2", className)}>{children}</div>;
}

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

// # Component
function Content({ children, className }: ContentProps) {
  return (
    <div
      className={cn(
        "hover:bg-hover-item flex h-11 w-full cursor-pointer items-center gap-3 rounded-lg px-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

export const ItemSideBar = {
  Wrap,
  Content,
};
