import UserAvatar from "@/components/UserAvatar";

// # Component
export default function Comment() {
  return (
    <div className="flex gap-1.5 pt-3 text-sm">
      {/* Avatar left */}
      <UserAvatar className="size-8" />

      {/* Comment on right side*/}
      <div>
        <div className="bg-comment-background rounded-2xl px-3 py-2">
          <div className="text-xs font-semibold">Nguyen Quang Hung</div>
          <div className="">
            Sharing a meal with family made it even more special
          </div>
        </div>

        <div className="space-x-4 pl-2.5 text-xs text-secondary-foreground">
          <span>9h</span>
          <span className="font-bold">Like</span>
        </div>
      </div>
    </div>
  );
}
