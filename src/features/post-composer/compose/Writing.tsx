"use client";

import { useUser } from "@/context/user-context";
import { cn } from "@/lib/utils";
import { useCompose } from "./compose-context";
import UpPhotos from "./UpPhotos";

interface WritingProps {
  className?: string;
}

// # Component
export default function Writing({ className }: WritingProps) {
  const { user } = useUser();
  const { openPhoto } = useCompose();

  return (
    // max-h-40 min-h-36
    <div className={cn("mx-4 flex-1 overflow-y-auto", className)}>
      <div className="flex w-full flex-col">
        {/* Input */}
        <div
          className={cn("relative flex-1 pb-4 text-2xl", {
            "text-base": openPhoto,
          })}
        >
          <p className="absolute left-0 top-0 z-10 text-secondary-foreground">
            What's on your mind, {user?.firstName}
          </p>
          <div
            contentEditable
            suppressContentEditableWarning
            autoFocus
            tabIndex={0}
            className="relative z-20 text-primary-foreground outline-none"
          ></div>
        </div>

        <UpPhotos />
      </div>
    </div>
  );
}
