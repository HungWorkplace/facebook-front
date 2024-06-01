"use client";

import { ImCamera } from "react-icons/im";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/custom/dialog";
import ChoosePicture from "./ChoosePicture";
import AcceptPicture from "./AcceptPicture";
import {
  ProfileAvatarProvider,
  useProfileAvatarContext,
} from "./context/profile-avatar";

// # Component
export default function UploadIcon() {
  return (
    <ProfileAvatarProvider>
      <Dialog>
        <DialogTrigger asChild>
          <span className="absolute bottom-2 right-2 flex size-9 cursor-pointer items-center justify-center rounded-full bg-secondary-button-background">
            <ImCamera size={20} />
          </span>
        </DialogTrigger>
        <Content />
      </Dialog>
    </ProfileAvatarProvider>
  );
}

function Content() {
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
