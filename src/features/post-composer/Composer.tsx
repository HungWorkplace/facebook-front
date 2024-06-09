import { X } from "lucide-react";
import { DialogClose, DialogFooter } from "./custom/dialog";
import AudienceTrigger from "./audience/AudienceTrigger";
import UserContent from "./compose-area/UserContent";
import PostAugmenter from "./footer-actions/PostAugmenter";
import Title from "./components/Title";
import { getUser } from "@/controllers/user";
import { AvatarName } from "@/components/AvatarName";
import Submit from "./footer-actions/Submit";

// # Component
export default async function Composer() {
  const user = await getUser();

  return (
    <div className="flex h-full w-full flex-col">
      <Title title="Create post">
        <DialogClose>
          <X size={25} />
        </DialogClose>
      </Title>

      {/* Author of the post */}
      <div className="mx-4 flex items-center gap-3 py-4">
        <AvatarName.Root user={user}>
          <AvatarName.Image />
        </AvatarName.Root>

        <div className="flex-1 space-y-1">
          <div className="text-sm font-semibold">{user.fullName}</div>
          <AudienceTrigger />
        </div>
      </div>

      <UserContent />

      <DialogFooter className="flex flex-col py-4">
        <PostAugmenter />

        <Submit />
      </DialogFooter>
    </div>
  );
}
