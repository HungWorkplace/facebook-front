"use client";

import { useProfileContext } from "@/context/profile";

// # Component
export default function ProfileDescription() {
  const { userProfile } = useProfileContext();

  return (
    <div className="space-y-1 text-center">
      <h1 className="text-3xl font-bold">{userProfile.fullName}</h1>
      <p className="mt-1 font-semibold text-secondary-foreground">
        {userProfile.friends?.length || 0} friends
      </p>
    </div>
  );
}
