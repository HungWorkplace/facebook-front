"use client";

import { useUser } from "@/context";
import { cn } from "@/lib/utils";

interface UserNameProps {
  className?: string;
}

// # Component
export default function UserName({ className }: UserNameProps) {
  const { user } = useUser();

  return (
    <p
      className={cn("font-medium", className)}
    >{`${user?.firstName} ${user?.surname}`}</p>
  );
}
