import UserAvatar from "@/components/UserAvatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import UserComment from "./UserComment";
import CommentOptionsMenu from "./CommentOptionsMenu";

interface CommentProps {
  className?: string;
}

// # Component
export default function Comment({ className }: CommentProps) {
  return (
    <div className={cn("flex gap-1.5 pt-3 text-sm", className)}>
      {/* Avatar left */}
      <UserAvatar className="size-8" />

      <div className="flex flex-1">
        {/* Comment on right side*/}
        <UserComment className="flex-1" />

        {/* 3 dots Action */}
        <CommentOptionsMenu className="" />
      </div>
    </div>
  );
}
