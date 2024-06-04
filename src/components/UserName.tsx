import { getUser } from "@/controllers/user";
import { cn } from "@/lib/utils";

interface UserNameProps {
  className?: string;
}

// # Component
export default async function UserName({ className }: UserNameProps) {
  const user = await getUser();

  return (
    <p
      className={cn("font-medium", className)}
    >{`${user?.firstName} ${user?.surname}`}</p>
  );
}
