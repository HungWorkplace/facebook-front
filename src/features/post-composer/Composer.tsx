import { X } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "./dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import UserAvatar from "@/components/UserAvatar";
import { fetchUser } from "@/utils/api/user";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PostAudience from "./PostAudience";

// # Component
export default async function Composer() {
  const user = await fetchUser();

  return (
    <>
      <DialogHeader className="relative flex h-[3.75rem] items-center justify-center border-b">
        <DialogTitle className=" text-xl font-bold">Create post</DialogTitle>
        <DialogClose className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-button-background hover:bg-hover-icon-button">
          <X className="text-secondary-icon" size={25} />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogHeader>

      <div className="mx-4 flex items-center gap-3 py-4">
        <UserAvatar />
        <div className="flex-1 space-y-1">
          <div className="text-sm font-semibold">
            {user?.firstName} {user?.surname}
          </div>
          <PostAudience />
        </div>
      </div>

      {/* Input */}
      <div className="relative mx-4 flex-1">
        <p className="absolute left-0 top-0 z-10 text-2xl text-secondary-foreground">
          What's on your mind, {user?.firstName}
        </p>
        <div
          contentEditable
          suppressContentEditableWarning
          autoFocus
          tabIndex={0}
          className="relative z-20 text-2xl text-primary-foreground outline-none"
        ></div>
      </div>

      <DialogFooter className="flex flex-col py-4">
        <div className="mx-4 flex items-center justify-between rounded-md border px-4 py-2 shadow-sm">
          <p className="text-sm font-semibold">Add to your post</p>

          <Button variant={"ghost"} className="h-9 w-9 p-0">
            <Image
              src={"/photo-video.png"}
              alt="post photo or video"
              width={24}
              height={24}
            />
          </Button>
        </div>

        <Button
          variant="default"
          className="disabled:text-disabled-button-text mx-4 mt-4 disabled:cursor-no-drop disabled:bg-[#e4e6eb] disabled:opacity-100"
          disabled
        >
          Post
        </Button>
      </DialogFooter>
    </>
  );
}
