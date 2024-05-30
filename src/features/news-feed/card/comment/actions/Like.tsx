"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

// # Component
export default function Like() {
  const [liked, setLiked] = useState(false);

  return (
    <span
      onClick={() => setLiked((prev) => !prev)}
      className={cn("cursor-pointer font-bold hover:underline", {
        "text-primary": liked,
      })}
    >
      Like
    </span>
  );
}
