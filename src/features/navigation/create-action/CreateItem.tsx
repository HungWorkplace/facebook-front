"use client";

import { useZustandStore } from "@/stores/zustand/store-provider";
import { OptionsItem } from "../OptionsItem";
import { PiNotePencilFill } from "react-icons/pi";
import { PopoverClose } from "@/components/ui/popover";
import { useRef } from "react";

// # Component
export default function CreateItem() {
  const composerTrigger = useZustandStore((state) => state.composeRef);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <h1 className="px-2 pb-3 text-2xl font-bold">Create</h1>
      <OptionsItem.Root
        onClick={() => {
          composerTrigger?.click();
          closeRef.current?.click();
        }}
      >
        <OptionsItem.Icon>
          <PiNotePencilFill size={20} color="black" />
        </OptionsItem.Icon>
        <OptionsItem.Text
          heading="Post"
          description="Share a post on NewsFeed"
        />
      </OptionsItem.Root>
      <PopoverClose ref={closeRef} className="hidden" />
    </>
  );
}
