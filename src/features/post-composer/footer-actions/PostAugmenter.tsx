"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useDialogContext } from "../context/dialog-context";

// # Component
export default function PostAugmenter() {
  const { openPhoto, setOpenPhoto } = useDialogContext();

  return (
    <div className="mx-4 flex items-center justify-between rounded-lg border px-4 py-2 shadow-sm">
      <p className="text-sm font-semibold">Add to your post</p>

      <Button
        onClick={() => setOpenPhoto(!openPhoto)}
        variant={"ghost"}
        className={cn("h-9 w-9 p-0", {
          "bg-accent": openPhoto,
        })}
      >
        <Image
          src={"/gallery.svg"}
          alt="post photo or video"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
}
