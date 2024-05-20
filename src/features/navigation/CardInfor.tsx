"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context";
import styles from "./your-profile.module.css";

export default function CardInfo() {
  const { user } = useUser();

  const fallbackName =
    (user?.firstName?.[0].toUpperCase() ?? "") +
    (user?.surname?.[0].toUpperCase() ?? "");

  return (
    <div
      className={`mx-4 mb-4 rounded-md p-1 shadow-md ${styles["shadow-card"]}`}
    >
      {/* info */}
      <div className="hover:bg-hover-banner flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src={user?.avatar ? user.avatar : "/no-avatar.jpg"} />
          <AvatarFallback>{fallbackName}</AvatarFallback>
        </Avatar>
        <p className="font-medium">{`${user?.firstName} ${user?.surname}`}</p>
      </div>

      {/* Divide */}
      {/* <div className="mx-auto h-px w-11/12 bg-[#ced0d4]"></div> */}
    </div>
  );
}
