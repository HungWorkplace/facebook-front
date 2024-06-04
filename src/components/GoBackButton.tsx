"use client";

import { useRouter } from "next/navigation";

// # Component
export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="font-semibold text-primary"
    >
      Go back
    </button>
  );
}
