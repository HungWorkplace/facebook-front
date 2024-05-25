import UserAvatar from "@/components/UserAvatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Card from "@/components/layouts/Card";
import StatusInput from "./StatusInput";

// # Component
export default function ActiveComposer() {
  return (
    <Card>
      <div className="flex gap-2 border-b pb-3">
        <UserAvatar />
        <StatusInput />
      </div>

      <Button variant={"ghost"} className="mt-3 ">
        <div className="flex items-center gap-2">
          <Image
            src={"/gallery.svg"}
            alt="post photo or video"
            width={24}
            height={24}
          />
          <span className="text-sm font-semibold text-secondary-foreground">
            Photo/Video
          </span>
        </div>
      </Button>
    </Card>
  );
}
