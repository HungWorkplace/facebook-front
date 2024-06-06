"use client";

import { cn } from "@/lib/utils";
import CommentForm from "./CommentForm";
import { AvatarName } from "@/components/AvatarName";
import { useUser } from "@/context/user-context";

interface CommentBoxProps {
  className?: string;
}

// # Component
export default function CommentBox({ className }: CommentBoxProps) {
  const user = useUser();

  return (
    <div className={cn("flex gap-1.5", className)}>
      {/* Avatar on the left */}
      <AvatarName.Root user={user}>
        <AvatarName.Image className="size-8" />
      </AvatarName.Root>

      {/* Comment on the right side */}
      <CommentForm />
    </div>
  );
}
