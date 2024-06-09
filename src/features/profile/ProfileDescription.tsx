"use client";

import VerifyIcon from "@/components/svg/VerifyIcon";
import { useProfileContext } from "@/context/profile";

// # Component
export default function ProfileDescription() {
  const { userProfile } = useProfileContext();

  return (
    <div className="space-y-1 text-center">
      <h1 className="flex items-baseline space-x-3 text-3xl font-bold">
        <span>{userProfile.fullName}</span>
        {userProfile.isVerified && <VerifyIcon size={16} />}
      </h1>
      <p className="mt-1 font-semibold text-secondary-foreground">
        {userProfile.friends?.length || 0} friends
      </p>
    </div>
  );
}
