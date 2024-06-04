"use client";

import { useProfileContext } from "@/context/profile";
import Image from "next/image";

// # Component
export default function Avatar() {
  const { userProfile } = useProfileContext();

  return (
    <Image
      src={userProfile.avatar?.url || "/no-avatar.jpg"}
      alt="avatar"
      width={168}
      height={168}
      className="aspect-square rounded-full border-4 border-white object-cover"
    />
  );
}
