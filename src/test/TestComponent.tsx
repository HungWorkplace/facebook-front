"use client";

import { useProfileContext } from "@/context/profile";

// # Component
export default function TestComponent() {
  const { userProfile } = useProfileContext();

  console.log(userProfile);

  return <div>TestComponent</div>;
}
