import { timeAgoShort } from "@/utils/timeAgo";
import { CommentState } from "./context/comment-context";
import LikeContainer from "./like/LikeContainer";

interface CommentStatusProps {
  comment: CommentState;
}

// # Component
export default function CommentStatus({ comment }: CommentStatusProps) {
  if (comment.status === "loading") return <span>Posting...</span>;

  if (comment.status === "error")
    return <span className="text-red-500">Error posting</span>;

  return (
    <div className="flex gap-4">
      {comment.createdAt && <span>{timeAgoShort(comment.createdAt)}</span>}

      <LikeContainer comment={comment} />
    </div>
  );
}
