"use client";

import { Button } from "@/components/ui/custom/button";
import { Plus } from "lucide-react";
import SuggestedPhotos from "./SuggestedPhotos";
import { DialogBody } from "@/components/ui/custom/dialog";
import { useRef } from "react";
import { useProfileAvatarContext } from "./context/profile-avatar";

// # Component
export default function ChoosePicture() {
  const { setSelectedImage, setIsChose } = useProfileAvatarContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage({
          base64: reader.result as string,
          file,
        });
      };
      reader.readAsDataURL(file);

      setIsChose(true);
    }
  };

  return (
    <DialogBody>
      <Button className="w-72 gap-2 bg-[#ebf5ff] py-1 text-primary hover:bg-[#dfe9f2]">
        <Plus size={16} />
        <span
          onClick={() => inputRef.current?.click()}
          className="font-semibold"
        >
          Upload Photo
        </span>
        <input
          ref={inputRef}
          onChange={handleSelectedImage}
          type="file"
          name="photo"
          className="hidden"
        />
      </Button>
      <SuggestedPhotos className="mt-5" />
    </DialogBody>
  );
}
