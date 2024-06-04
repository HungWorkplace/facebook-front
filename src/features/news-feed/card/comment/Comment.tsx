import { cn } from "@/lib/utils";
import UserComment from "./UserComment";
import CommentOptionsMenu from "./CommentOptionsMenu";
import { AvatarName } from "@/components/AvatarName";

interface CommentProps {
  className?: string;
}

// # Component
export default async function Comment({ className }: CommentProps) {
  return (
    <div className={cn("flex gap-1.5 pt-3 text-sm", className)}>
      {/* Avatar left */}
      <AvatarName.Root user={undefined}>
        <AvatarName.Image className="size-8" />
      </AvatarName.Root>

      <div className="flex flex-1">
        {/* Comment on right side*/}
        <UserComment className="flex-1" />

        {/* 3 dots Action */}
        <CommentOptionsMenu className="" />
      </div>
    </div>
  );
}
