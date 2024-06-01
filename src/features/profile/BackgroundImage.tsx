import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BackgroundAvatarProps {
  className?: string;
}

// # Component
export default function BackgroundImage({ className }: BackgroundAvatarProps) {
  return (
    <div className={cn("mx-auto overflow-hidden", className)}>
      <AspectRatio ratio={2.7}>
        <div className="relative h-full w-full">
          <Image
            src="/background-avatar.jpg"
            alt="background"
            fill
            priority
            className="rounded-b-lg object-cover"
          />
        </div>
      </AspectRatio>
    </div>
  );
}
