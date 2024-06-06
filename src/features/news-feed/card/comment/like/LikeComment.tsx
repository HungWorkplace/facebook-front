import { cn } from "@/lib/utils";
import Image from "next/image";

interface LikeCommentProps {
  length: number;
  className?: string;
}

// # Component
export default function LikeComment({ length, className }: LikeCommentProps) {
  if (length === 0) return null;

  return (
    <div className={cn("flex items-center justify-end space-x-1", className)}>
      <span>{length}</span>
      <Image
        src="/like.svg"
        width={18}
        height={18}
        alt="like"
        className="h-[18px] w-[18px]"
      />
    </div>
  );
}
