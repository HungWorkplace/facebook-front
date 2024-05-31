import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImCamera } from "react-icons/im";

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
      <div className={cn("relative mb-3 h-[5.25rem] w-[10.5rem]", "900:mr-4")}>
        <div className={cn("absolute bottom-0 z-20", "size-[10.5rem]")}>
          <Image
            src="/lisa.jpg"
            alt="avatar"
            width={168}
            height={168}
            className="aspect-square rounded-full border-4 border-white object-cover"
          />
          {/* Upload - camera icon */}
          <span className="absolute bottom-2 right-2 flex size-9 cursor-pointer items-center justify-center rounded-full bg-secondary-button-background">
            <ImCamera size={20} />
          </span>
        </div>
      </div>
      <div className="space-y-1 text-center">
        <h1 className="text-3xl font-bold">Black Pink</h1>
        <p className="mt-1 font-semibold text-secondary-foreground">
          1.6K friends
        </p>
      </div>
    </div>
  );
}
