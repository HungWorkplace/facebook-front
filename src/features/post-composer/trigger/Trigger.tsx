"use client";

import { DialogTrigger } from "@/components/ui/custom/dialog";
import { useUser } from "@/context/user-context";
import { useZustandStore } from "@/stores/zustand/store-provider";

// # Component
export default function Trigger() {
  const user = useUser();
  const setRef = useZustandStore((state) => state.setComposeRef);

  return (
    <DialogTrigger asChild ref={(ref) => setRef(ref)}>
      <div className="flex flex-1 cursor-pointer items-center rounded-full bg-[#f1f2f6] pl-3 text-secondary-foreground hover:bg-[#e4e6e9]">
        What&apos;s on your mind, {user?.firstName}?
      </div>
    </DialogTrigger>
  );
}
