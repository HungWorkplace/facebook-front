"use client";

import { cn } from "@/lib/utils";
import UserComment from "./UserComment";
import CommentOptionsMenu from "./CommentOptionsMenu";
import { AvatarName } from "@/components/AvatarName";
import Link from "next/link";
import { useCommentContext } from "./context/comment-context";

interface CommentProps {
  className?: string;
}

// # Component
export default function Comments({ className }: CommentProps) {
  const { commentsState } = useCommentContext();

  return (
    <>
      {commentsState.map((comment) => (
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

          <div className="flex">
            {/* Comment on right side*/}
            <UserComment comment={comment} />

            {/* 3 dots Action */}
            <CommentOptionsMenu className="" />
          </div>
        </div>
      ))}
    </>
  );
}
