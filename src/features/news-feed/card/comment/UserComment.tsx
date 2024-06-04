import { cn } from "@/lib/utils";
import Image from "next/image";
import Like from "./actions/Like";

interface UserCommentProps {
  className?: string;
}

// # Component
export default function UserComment({ className }: UserCommentProps) {
  return (
    <div className={cn("", className)}>
      <div className="rounded-2xl bg-comment-background px-3 py-2">
        {/* Username */}
        <div className="cursor-pointer text-xs font-semibold hover:underline">
          Nguyen Quang Hung
        </div>
        <div className="">
          Sharing a meal with family made it even more special
        </div>
      </div>

      {/* Like button */}
      <div className="flex justify-between pl-2.5 pt-0.5 text-xs text-secondary-foreground">
        <div className="space-x-4">
          <span>9h</span>
          <Like />
        </div>

        <div className="flex items-center space-x-1">
          <span>32</span>
          <Image
            src="/like.svg"
            width={18}
            height={18}
            alt="like"
            className="h-[18px] w-[18px]"
          />
        </div>
      </div>
    </div>
  );
}
