import UserAvatar from "@/components/UserAvatar";

// # Component
export default function CommentBox() {
  return (
    <div className="flex gap-1.5">
      {/* Avatar on the left */}
      <UserAvatar className="size-8" />

      {/* Comment on the right side */}
      <div className="relative h-8 flex-1 text-sm">
        <div contentEditable suppressContentEditableWarning className=""></div>
        <div className="absolute left-0 top-0">Write a comment</div>
      </div>
    </div>
  );
}
