"use client";

import { useUser } from "@/context/user-context";
import { cn } from "@/lib/utils";
import UpPhotos from "./UpPhotos";
import { useDialogContext } from "../context/dialog-context";
import { useState, useEffect } from "react";
import ContentEditable from "@/components/ContentEditable";

interface UserContentProps {
  className?: string;
}

export default function UserContent({ className }: UserContentProps) {
  const user = useUser();
  const { openPhoto, content, setContent } = useDialogContext();
  const [changeTextSize, setChangeTextSize] = useState<
    "text-base" | "text-2xl"
  >("text-2xl");

  useEffect(() => {
    setChangeTextSize(content.length > 80 ? "text-base" : "text-2xl");
  }, [content]);

  return (
    <div className={cn("mx-4 flex-1 overflow-y-auto", className)}>
      <div className="flex w-full flex-col">
        {/* Typing */}
        <div
          className={cn("relative flex-1 pb-4", changeTextSize, {
            "text-base": openPhoto,
          })}
        >
          <ContentEditable
            value={content}
            onChange={setContent}
            placeholder={`What's on your mind, ${user?.firstName}?`}
            className="relative z-20 text-primary-foreground outline-none"
          />
        </div>

        {openPhoto && <UpPhotos />}
      </div>
    </div>
  );
}
