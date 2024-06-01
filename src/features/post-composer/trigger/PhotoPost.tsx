"use client";

import Image from "next/image";
import { Button } from "@/components/ui/custom/button";
import { useDialogContext } from "../context/dialog-context";

// # Component
export default function PhotoPost() {
  const { setOpenDialog, setOpenPhoto } = useDialogContext();

  const handleClick = () => {
    setOpenPhoto(true);
    setOpenDialog(true);
  };

  return (
    <Button onClick={handleClick} variant={"ghost"} className="mt-3 ">
      <div className="flex items-center gap-2">
        <Image
          src={"/gallery.svg"}
          alt="post photo or video"
          width={24}
          height={24}
        />
        <span className="text-sm font-semibold text-secondary-foreground">
          Photo/Video
        </span>
      </div>
    </Button>
  );
}
