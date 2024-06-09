"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { AvatarName } from "@/components/AvatarName";
import { useProfileContext } from "@/context/profile";

interface ProfileTabsProps {
  className?: string;
}

// # Component
export default function ProfileTabs({ className }: ProfileTabsProps) {
  const [freeze, setFreeze] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const { userProfile } = useProfileContext();

  useEffect(() => {
    const scrollListener = () => {
      if (!tabsRef.current) return;

      if (window.scrollY >= tabsRef.current.offsetTop - 56) {
        setFreeze(true);
      } else {
        setFreeze(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={tabsRef}
      className={cn(
        "bg-white shadow-[0_2px_3px_-1px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <nav className="mx-auto flex h-[3.75rem] max-w-[54.75rem] items-center">
        {/* Nav link */}
        {!freeze && (
          <div className="relative flex h-full cursor-pointer items-center px-4 font-semibold text-primary">
            <span>Posts</span>
            <div className="absolute inset-x-0 bottom-0 h-[3px] rounded-t bg-primary"></div>
          </div>
        )}

        {freeze && (
          <div
            onClick={handleScrollUp}
            className="cursor-pointer rounded-lg p-2 hover:bg-hover-item-radio"
          >
            <AvatarName.Root user={userProfile} className="gap-3">
              <AvatarName.Image className="" />
              <AvatarName.FullName className="" />
            </AvatarName.Root>
          </div>
        )}
      </nav>
    </div>
  );
}
