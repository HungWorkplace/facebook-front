import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImCamera } from "react-icons/im";
import ProfileAvatar from "./upload-avatar/ProfileAvatar";

interface ProfileHeaderProps {
  className?: string;
}

// # Component
export default function ProfileHeader({ className }: ProfileHeaderProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col items-center",
        "mx-auto max-w-[56.75rem] px-4",
        "900:flex-row 900:justify-start",
        className,
      )}
    >
      {/* Avatar */}
      <ProfileAvatar
        className={cn("relative mb-3 h-[5.25rem] w-[10.5rem]", "900:mr-4")}
      />

      <div className="space-y-1 text-center">
        <h1 className="text-3xl font-bold">Black Pink</h1>
        <p className="mt-1 font-semibold text-secondary-foreground">
          1.6K friends
        </p>
      </div>
    </div>
  );
}
