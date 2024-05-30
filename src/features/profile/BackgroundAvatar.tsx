import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BackgroundAvatarProps {
  className?: string;
}

// # Component
export default function BackgroundAvatar({ className }: BackgroundAvatarProps) {
  return (
    <div className={cn("relative", className)}>
      <AspectRatio ratio={2.7}>
        <Image
          src="/background-avatar.jpg"
          alt="background"
          fill
          className="rounded-b-md object-cover"
        />
      </AspectRatio>

      <Image
        src="/lisa.jpg"
        alt="avatar"
        width={168}
        height={168}
        className="absolute bottom-0 left-1/2 aspect-square -translate-x-1/2 translate-y-1/2 rounded-full border-4 border-white object-cover"
      />
    </div>
  );
}
