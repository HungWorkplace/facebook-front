import { cn } from "@/lib/utils";
import Link from "next/link";
import { CommentState } from "./context/comment-context";
import CommentStatus from "./CommentStatus";

interface UserCommentProps {
  className?: string;
  comment: CommentState;
}

// # Component
export default function UserComment({ className, comment }: UserCommentProps) {
  return (
    <div className={cn("", className)}>
      <div className="rounded-2xl bg-comment-background px-3 py-2">
        {/* Username */}
        <div className="cursor-pointer text-xs font-semibold hover:underline">
          <Link href={`users/${comment.author._id}`}>
            {comment.author.fullName}
          </Link>
        </div>
        <div className="">{comment.content}</div>
      </div>

      {/* Like button */}
      <div className="pl-2.5 pt-0.5 text-xs text-secondary-foreground">
        <CommentStatus comment={comment} />
      </div>
    </div>
  );
}
