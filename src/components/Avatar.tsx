"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context";

// # Component
export default function UserAvatar() {
  const { user } = useUser();

  const fallbackName =
    (user?.firstName?.[0].toUpperCase() ?? "") +
    (user?.surname?.[0].toUpperCase() ?? "");

  return (
    <Avatar className="cursor-pointer transition-all active:scale-[.98]">
      <AvatarImage
        src={user?.avatar ? user.avatar : "/no-avatar.jpg"}
        className="transition-all hover:brightness-90 active:brightness-75"
      />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
  );
}
