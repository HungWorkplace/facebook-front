"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { CommentState } from "./context/comment-context";
import CommentStatus from "./CommentStatus";
import CommentOptionsMenu from "./CommentOptionsMenu";
import { useUser } from "@/context/user-context";
import VerifyIcon from "@/components/svg/VerifyIcon";

interface UserCommentProps {
  className?: string;
  comment: CommentState;
}

// # Component
export default function UserComment({ className, comment }: UserCommentProps) {
  const user = useUser();

  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-1">
        <div className="rounded-2xl bg-comment-background px-3 py-2">
          {/* Username */}
          <div className="flex cursor-pointer items-baseline gap-1.5 text-xs font-semibold hover:underline">
            <Link href={`users/${comment.author._id}`}>
              {comment.author.fullName}
            </Link>
            {comment.author.isVerified && <VerifyIcon size={12} />}
          </div>
          {/* Content */}
          <div className="">{comment.content}</div>
        </div>

        {/* 3 dots Action */}
        {user._id === comment.author._id && (
          <CommentOptionsMenu comment={comment} />
        )}
      </div>

      {/* Like button */}
      <div className="pl-2.5 pt-0.5 text-xs text-secondary-foreground">
        <CommentStatus comment={comment} />
      </div>
    </div>
  );
}
