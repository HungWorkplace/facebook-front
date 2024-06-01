import { cn } from "@/lib/utils";
import Image from "next/image";
import UploadIcon from "./UploadIcon";

interface ProfileAvatarProps {
  className?: string;
}

// # Component
export default function ProfileAvatar({ className }: ProfileAvatarProps) {
  return (
    <div className={cn(className)}>
      <div className={cn("absolute bottom-0 z-20 size-[10.5rem]")}>
        <Image
          src="/lisa.jpg"
          alt="avatar"
          width={168}
          height={168}
          className="aspect-square rounded-full border-4 border-white object-cover"
        />

        <UploadIcon />
      </div>
    </div>
  );
}
