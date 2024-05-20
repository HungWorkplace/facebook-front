"use client";

import { useUser } from "@/context";

interface TestProps {}

// # Component
export default function Test() {
  const { user } = useUser();

  return <div>{user && user.email}</div>;
}
