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
  const user = useUser();
  const { openPhoto } = useDialogContext();
  const [changeTextSize, setChangeTextSize] = useState<
    "text-base" | "text-2xl"
  >("text-2xl");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.textContent || "";

    setChangeTextSize(newContent.length > 80 ? "text-base" : "text-2xl");
    setShowPlaceholder(newContent.length === 0);
  };

  return (
    // max-h-40 min-h-36
    <div className={cn("mx-4 flex-1 overflow-y-auto", className)}>
      <div className="flex w-full flex-col">
        {/* Typing */}
        <div
          className={cn("relative flex-1 pb-4", changeTextSize, {
            "text-base": openPhoto,
          })}
        >
          {showPlaceholder && (
            <p className="absolute left-0 top-0 z-10 text-secondary-foreground">
              What's on your mind, {user?.firstName}?
            </p>
          )}

          <div
            contentEditable
            suppressContentEditableWarning
            autoFocus
            tabIndex={0}
            onInput={handleInput}
            className="relative z-20 text-primary-foreground outline-none"
          ></div>
        </div>

        {openPhoto && <UpPhotos />}
      </div>
    </div>
  );
}
