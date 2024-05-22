"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  className?: string;
}

// # Component
export default function UserAvatar({ className }: UserAvatarProps) {
  const { user } = useUser();

  const fallbackName =
    (user?.firstName?.[0].toUpperCase() ?? "") +
    (user?.surname?.[0].toUpperCase() ?? "");

  return (
    <Avatar
      className={cn(
        "cursor-pointer transition-all active:scale-[.98]",
        className,
      )}
    >
      <AvatarImage
        src={user?.avatar ? user.avatar : "/no-avatar.jpg"}
        className="transition-all hover:brightness-90 active:brightness-75"
      />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
  );
}
