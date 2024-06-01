"use client";

import { Button } from "@/components/ui/custom/button";
import { DialogActions } from "@/components/ui/custom/dialog";
import { useProfileAvatarContext } from "./context/profile-avatar";

// # Component
export default function AcceptPicture() {
  const { selectedImage, setIsChose } = useProfileAvatarContext();

  return (
    <div>
      <img
        src={selectedImage as string}
        alt="before accept to upload picture"
        className="mx-auto my-4 size-[18.75rem] rounded-full object-cover"
      />
      <DialogActions>
        <Button
          variant={"ghost"}
          onClick={() => setIsChose(false)}
          className="text-primary hover:text-primary"
        >
          Cancel
        </Button>
        <Button background={"primary"} className="ml-2 w-28 text-white">
          Save
        </Button>
      </DialogActions>
    </div>
  );
}
