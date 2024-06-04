"use client";

import {
  DialogContent,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogClose,
} from "@/components/ui/custom/dialog";
import ChoosePicture from "./ChoosePicture";
import AcceptPicture from "./AcceptPicture";
import { useProfileAvatarContext } from "./context/profile-avatar";

// # Component
export function Content() {
  const { isChose, setIsChose } = useProfileAvatarContext();

  return (
    <DialogContent className="max-w-[43.75rem]">
      <DialogHeader>
        <DialogTitle>Choose profile picture</DialogTitle>
        <DialogClose asChild onClick={() => setIsChose(false)}>
          <DialogIcon />
        </DialogClose>
      </DialogHeader>

      {!isChose && <ChoosePicture />}
      {isChose && <AcceptPicture />}
    </DialogContent>
  );
}
