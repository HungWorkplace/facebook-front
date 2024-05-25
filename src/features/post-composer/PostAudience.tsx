"use client";

import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";
import { FaLock } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";

// # Component
export default function PostAudience() {
  const { scrollNext } = useCarousel();

  return (
    <Button
      onClick={scrollNext}
      className="h-auto bg-secondary-button-background px-2 py-0.5 text-xs text-[#1d1f23] hover:bg-secondary-button-background"
    >
      <FaLock size={12} />
      <span className="mx-1">Only me</span>
      <FaCaretDown size={15} />
    </Button>
  );
}