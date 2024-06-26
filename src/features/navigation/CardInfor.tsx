"use client";

import styles from "./your-profile.module.css";
import { AvatarName } from "@/components/AvatarName";
import { PopoverClose } from "@/components/ui/popover";
import { useUser } from "@/context/user-context";
import Link from "next/link";
import { useRef } from "react";

export default function CardInfo() {
  const user = useUser();
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    closeRef.current?.click();
  };

  return (
    <div
      className={`mx-4 mb-4 rounded-md p-1 shadow-md ${styles["shadow-card"]}`}
      onClick={handleClick}
    >
      <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4 hover:bg-hover-banner">
        <PopoverClose ref={closeRef} className="hidden" />
        <Link href={`/users/${user.id}`}>
          <AvatarName.Root user={user}>
            <AvatarName.Image className="size-9" />
            <AvatarName.FullName />
          </AvatarName.Root>
        </Link>
      </div>
    </div>
  );
}
