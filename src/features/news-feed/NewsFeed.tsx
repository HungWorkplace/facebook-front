"use client";

import UserAvatar from "@/components/Avatar";
import { cn } from "@/lib/utils";
import { useUser } from "@/context";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CardProps {
  className?: string;
}

// # Component
export default function NewsFeed({ className }: CardProps) {
  const { user } = useUser();

  return (
    <div className={className}>
      <Card>
        <div className="flex gap-2 border-b pb-3">
          <UserAvatar />
          <div className="flex flex-1 cursor-pointer items-center rounded-full bg-[#f1f2f6] pl-3 text-secondary-foreground hover:bg-[#e4e6e9]">
            What's on your mind, {user?.firstName}?
          </div>
        </div>

        <Button variant={"ghost"} className="mt-3 ">
          <div className="flex items-center gap-2">
            <Image
              src={"/photo-video.png"}
              alt="post photo or video"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold text-secondary-foreground">
              Photo/Video
            </span>
          </div>
        </Button>
      </Card>
    </div>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-white px-4 pb-[0.625rem] pt-3 shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
