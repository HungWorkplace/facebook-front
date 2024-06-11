"use client";

import { Button } from "@/components/ui/custom/button";
import { DialogActions, DialogClose } from "@/components/ui/custom/dialog";
import { useProfileAvatarContext } from "./context/profile-avatar";
import { SuggestedImage } from "@/utils/constant";
import { url } from "@/MVC/routes";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// # Component
export default function AcceptPicture() {
  const { selectedImage, setIsChose } = useProfileAvatarContext();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    if (selectedImage === null) return console.log("Please select an image");

    const formData = new FormData();

    // If the selectedImage is a file, append it to the formData
    // Otherwise, get the suggested image key from the SuggestedImage object
    if (selectedImage.file) {
      formData.append("avatar", selectedImage.file);
    } else {
      const suggestedImageKey = SuggestedImage[selectedImage.base64];
      formData.append("suggestedImage", suggestedImageKey);
    }

    try {
      // Send a POST request with the formData to the server
      setIsLoading(true);
      const response = await fetch(url.users.post.uploadAvatar, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        setIsChose(false);
        closeRef.current?.click();
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Image
        src={selectedImage?.base64 || ""}
        alt="before accept to upload picture"
        width={300}
        height={300}
        className="mx-auto my-4 size-[18.75rem] rounded-full object-cover"
      />
      <DialogActions>
        <DialogClose ref={closeRef} className="hidden" />
        <Button
          variant={"ghost"}
          onClick={() => setIsChose(false)}
          className="text-primary hover:text-primary"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          isLoading={isLoading}
          background={"primary"}
          className="ml-2 w-28 text-white"
        >
          Save
        </Button>
      </DialogActions>
    </div>
  );
}
