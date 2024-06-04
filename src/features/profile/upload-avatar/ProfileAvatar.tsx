import { cn } from "@/lib/utils";
import UploadIcon from "./UploadIcon";
import Avatar from "./Avatar";

interface ProfileAvatarProps {
  className?: string;
}

// # Component
export default function ProfileAvatar({ className }: ProfileAvatarProps) {
  return (
    <div className={cn(className)}>
      <div className={cn("absolute bottom-0 z-20 size-[10.5rem]")}>
        <Avatar />

        <UploadIcon />
      </div>
    </div>
  );
}
