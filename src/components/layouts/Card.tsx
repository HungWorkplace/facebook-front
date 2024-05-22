import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-white px-4 pb-[0.625rem] pt-3 shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
