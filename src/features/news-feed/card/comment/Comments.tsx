"use client";

import { cn } from "@/lib/utils";
import UserComment from "./UserComment";
import { AvatarName } from "@/components/AvatarName";
import Link from "next/link";
import { useCommentContext } from "./context/comment-context";
import { useState } from "react";

interface CommentProps {
  className?: string;
}

// # Component
export default function Comments({ className }: CommentProps) {
  const { commentsState } = useCommentContext();
  const [showAll, setShowAll] = useState(false);

  if (!commentsState) return null;

  // 3 comments are displayed
  const limitedComments = showAll ? commentsState : commentsState.slice(0, 3);

  return (
    <div className="px-4">
      {commentsState.length > 3 && (
        <p
          onClick={() => setShowAll((prevShowAll) => !prevShowAll)}
          className="my-3 cursor-pointer text-sm font-semibold text-secondary-foreground"
        >
          View {showAll ? "less" : "more"} comments
        </p>
      )}

      {limitedComments.map((comment) => (
        <div
          key={comment._id}
          className={cn("flex gap-1.5 text-sm", className)}
        >
          {/* Avatar left */}
          <Link href={`users/${comment.author._id}`}>
            <AvatarName.Root user={comment.author} className="items-start">
              <AvatarName.Image className="size-8" />
            </AvatarName.Root>
          </Link>

          <div className="flex items-center">
            {/* Comment on right side*/}
            <UserComment comment={comment} />
          </div>
        </div>
      ))}
    </div>
  );
}
