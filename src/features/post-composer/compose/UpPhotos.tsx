import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// # Component
export default function UpPhotos() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Read file to base64
      const reader = new FileReader();
      // Event listener for when the file is loaded
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative rounded-lg border p-2">
      {/* Close button */}
      <Button
        className="text absolute right-4 top-4 h-8 w-8 rounded-full border bg-white p-0 text-secondary-icon hover:bg-[#f2f2f2]"
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose size={22} />
      </Button>

      {/* Add photo area */}
      <AspectRatio
        ratio={16 / 9}
        className="bg-card-background-flat grid cursor-pointer place-items-center rounded-lg hover:bg-[#eaebed]"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <div
          onClick={() => inputRef.current?.click()}
          className="space-y-1 text-center"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-hover-icon-button">
            <MdAddPhotoAlternate size={20} />
          </span>
          <div>
            <p className="font-semibold">Add Photos</p>
            <p className="text-xs text-secondary-foreground">
              or drag and drop
            </p>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}
