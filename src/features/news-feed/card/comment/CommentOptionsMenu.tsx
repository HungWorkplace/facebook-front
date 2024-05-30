import { cn } from "@/lib/utils";

interface CommentOptionsMenuProps {
  className?: string;
}

// # Component
export default function CommentOptionsMenu({
  className,
}: CommentOptionsMenuProps) {
  return <div className={cn("size-8", className)}></div>;
}
