"use client";

import { useUser } from "@/context/user-context";
import { cn } from "@/lib/utils";
import UpPhotos from "./UpPhotos";
import { useDialogContext } from "../context/dialog-context";
import { useState } from "react";

interface UserContentProps {
  className?: string;
}

// # Component
export default function UserContent({ className }: UserContentProps) {
  const { user } = useUser();
  const { openPhoto } = useDialogContext();
  const [content, setContent] = useState("");
  const [changeTextSize, setChangeTextSize] = useState<"base" | "lg">("lg");

  const handleChangeInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.target.textContent;
    if (newContent.length <= 80) {
      setContent(newContent);
    } else {
      console.log("Vượt quá 80 ký tự!");
    }
  };

  return (
    // max-h-40 min-h-36
    <div className={cn("mx-4 flex-1 overflow-y-auto", className)}>
      <div className="flex w-full flex-col">
        {/* Input */}
        <div
          className={cn(
            "relative flex-1 pb-4",
            {
              "text-2xl": changeTextSize === "lg",
            },
            openPhoto
              ? "text-base"
              : changeTextSize === "base"
                ? "text-base"
                : "text-2xl",
          )}
        >
          <p className="absolute left-0 top-0 z-10 text-secondary-foreground">
            What's on your mind, {user?.firstName}?
          </p>

          <div
            contentEditable
            autoFocus
            tabIndex={0}
            onInput={handleChangeInput}
            dangerouslySetInnerHTML={{ __html: content }}
            className="relative z-20 text-primary-foreground outline-none"
          ></div>
        </div>

        {openPhoto && <UpPhotos />}
      </div>
    </div>
  );
}
