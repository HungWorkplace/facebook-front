import { X } from "lucide-react";
import { DialogHeader, DialogTitle, DialogClose, DialogFooter } from "./dialog";

import UserAvatar from "@/components/UserAvatar";
import { fetchUser } from "@/utils/api/user";
import { Button } from "@/components/ui/button";
import PostAudience from "./PostAudience";
import Writing from "./compose/Writing";
import { ComposeProvider } from "./compose/compose-context";
import PostAugmenter from "./footer-actions/PostAugmenter";

// # Component
export default async function Composer() {
  const user = await fetchUser();

  return (
    <ComposeProvider>
      <DialogHeader className="relative flex h-[3.75rem] items-center justify-center border-b">
        <DialogTitle className=" text-xl font-bold">Create post</DialogTitle>

        <DialogClose className="press absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-button-background hover:bg-hover-icon-button">
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

      <Writing />

      <DialogFooter className="flex flex-col py-4">
        <PostAugmenter />

        <Button
          variant="default"
          className="mx-4 mt-4 disabled:cursor-no-drop disabled:bg-[#e4e6eb] disabled:text-disabled-button-text disabled:opacity-100"
          disabled
        >
          Post
        </Button>
      </DialogFooter>
    </ComposeProvider>
  );
}
