import UserAvatar from "@/components/UserAvatar";
import { User } from "@/types/api";

interface HeaderProps {
  user: User;
}

// # Component
export default function Header({ user }: HeaderProps) {
  return (
    <header>
      <div className="flex items-center gap-2">
        <UserAvatar user={user} />
        <div className="flex-1 space-y-1">
          <div className="text-sm font-semibold">{user.firstName}</div>
          <div className="text-xs text-gray-400">{user.surname}</div>
        </div>
      </div>
    </header>
  );
}
