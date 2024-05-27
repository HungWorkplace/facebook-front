import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User } from "@/types/api";
import { fetchUser } from "@/utils/api/user";

interface UserAvatarProps {
  user?: User;
  className?: string;
}

// # Component
export default async function UserAvatar({ user, className }: UserAvatarProps) {
  const userDetails = user ? user : await fetchUser();

  const fallbackName =
    (userDetails?.firstName?.[0].toUpperCase() ?? "") +
    (userDetails?.surname?.[0].toUpperCase() ?? "");

  return (
    <Avatar className={cn("press cursor-pointer", className)}>
      <AvatarImage
        src={userDetails?.avatar ? userDetails.avatar : "/no-avatar.jpg"}
        className="transition-all hover:brightness-90 active:brightness-75"
      />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
  );
}
