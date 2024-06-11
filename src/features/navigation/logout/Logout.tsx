"use client";

import { PopoverClose } from "@/components/ui/popover";
import Image from "next/image";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import * as actions from "@/actions/auth";
import { cn } from "@/lib/utils";

// # Component
export default function Logout() {
  const { pending } = useFormStatus();
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = () => {
    closeRef.current?.click();

    actions.logout();
  };

  return (
    <>
      <PopoverClose ref={closeRef} className="hidden" />
      <form action={() => handleSubmit()} className="w-full px-4">
        <button
          type="submit"
          className={cn(
            "inline-flex w-full items-center gap-3 rounded-lg p-2 outline-none hover:bg-hover-banner",
            { "pointer-events-none": pending },
          )}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4e6ec] text-[#1c1d21]">
            <Image src={"/logout.svg"} alt="logout" width={20} height={20} />
          </span>
          <span className="text-sm font-semibold">Log Out</span>
        </button>
      </form>
    </>
  );
}
