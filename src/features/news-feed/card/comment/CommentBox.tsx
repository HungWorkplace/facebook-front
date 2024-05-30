import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";
import CommentForm from "./CommentForm";

interface CommentBoxProps {
  className?: string;
}

// # Component
export default function CommentBox({ className }: CommentBoxProps) {
  return (
    <div className={cn("flex gap-1.5", className)}>
      {/* Avatar on the left */}
      <UserAvatar className="size-8" />

      {/* Comment on the right side */}
      <CommentForm />
    </div>
  );
}
