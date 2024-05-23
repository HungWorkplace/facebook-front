import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { fetchUser } from "@/utils/api/user";

interface UserAvatarProps {
  className?: string;
}

// # Component
export default async function UserAvatar({ className }: UserAvatarProps) {
  const user = await fetchUser();

  const fallbackName =
    (user?.firstName?.[0].toUpperCase() ?? "") +
    (user?.surname?.[0].toUpperCase() ?? "");

  return (
    <Avatar className={cn("press cursor-pointer", className)}>
      <AvatarImage
        src={user?.avatar ? user.avatar : "/no-avatar.jpg"}
        className="transition-all hover:brightness-90 active:brightness-75"
      />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
  );
}
