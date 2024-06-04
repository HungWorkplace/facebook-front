"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useProfileAvatarContext } from "./context/profile-avatar";

interface SuggestedPhotosProps {
  className?: string;
}

// # Component
export default function SuggestedPhotos({ className }: SuggestedPhotosProps) {
  const { setSelectedImage, setIsChose } = useProfileAvatarContext();

  const handlePickImage = (index: number) => {
    setSelectedImage({
      base64: `/cats/${index + 1}.jpg`,
    });
    setIsChose(true);
  };

  return (
    <div className={cn("", className)}>
      <h2 className="font-semibold">Suggested Photos</h2>

      <div className="mt-4 grid grid-cols-[repeat(auto-fill,_6.5rem)] gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={`/cats/${index + 1}.jpg`}
            alt={`cat ${index + 1}`}
            width={104}
            height={104}
            onClick={() => handlePickImage(index)}
            className="aspect-square cursor-pointer rounded-lg object-cover hover:brightness-90"
          />
        ))}
      </div>
    </div>
  );
}
