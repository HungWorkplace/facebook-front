import { cn } from "@/lib/utils";
import { fetchUser } from "@/utils/api/user";

interface UserNameProps {
  className?: string;
}

// # Component
export default async function UserName({ className }: UserNameProps) {
  const user = await fetchUser();

  return (
    <p
      className={cn("font-medium", className)}
    >{`${user?.firstName} ${user?.surname}`}</p>
  );
}
