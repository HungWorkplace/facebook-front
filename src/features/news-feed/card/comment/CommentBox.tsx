import { cn } from "@/lib/utils";
import CommentForm from "./CommentForm";
import { AvatarName } from "@/components/AvatarName";

interface CommentBoxProps {
  className?: string;
}

// # Component
export default function CommentBox({ className }: CommentBoxProps) {
  return (
    <div className={cn("flex gap-1.5", className)}>
      {/* Avatar on the left */}
      <AvatarName.Root user={undefined}>
        <AvatarName.Image className="size-8" />
      </AvatarName.Root>

      {/* Comment on the right side */}
      <CommentForm />
    </div>
  );
}
