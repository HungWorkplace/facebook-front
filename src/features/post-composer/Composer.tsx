import { X } from "lucide-react";
import {
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "./custom/dialog";

import UserAvatar from "@/components/UserAvatar";
import { fetchUser } from "@/utils/api/user";
import { Button } from "@/components/ui/button";
import AudienceTrigger from "./audience/AudienceTrigger";
import UserContent from "./compose-area/UserContent";
import PostAugmenter from "./footer-actions/PostAugmenter";
import Title from "./components/Title";

// # Component
export default async function Composer() {
  const user = await fetchUser();

  return (
    <div className="flex h-full w-full flex-col">
      <Title title="Create post">
        <DialogClose>
          <X size={25} />
        </DialogClose>
      </Title>

      <div className="mx-4 flex items-center gap-3 py-4">
        <UserAvatar />
        <div className="flex-1 space-y-1">
          <div className="text-sm font-semibold">
            {user?.firstName} {user?.surname}
          </div>
          <AudienceTrigger />
        </div>
      </div>

      <UserContent />

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
    </div>
  );
}
