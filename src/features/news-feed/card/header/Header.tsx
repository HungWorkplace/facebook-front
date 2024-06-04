import { Button } from "@/components/ui/custom/button";
import { Post } from "@/types/api";
import { timeAgo } from "@/utils/timeAgo";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from "./custom/popover";

import Link from "next/link";
import { HeaderItem } from "./HeaderItem";
import { HeaderProvider } from "./context/header-context";
import { AvatarName } from "@/components/AvatarName";

interface HeaderProps {
  post: Post;
}

// # Component
export default function Header({ post }: HeaderProps) {
  const { user, createdAt } = post;

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Avatar */}
        <AvatarName.Root user={user}>
          <AvatarName.Image />
        </AvatarName.Root>

        <div className="flex flex-col justify-center">
          {/* User name */}
          <Link
            href={"/"}
            className="text-sm font-semibold text-primary-foreground hover:underline"
          >
            {user.fullName}
          </Link>

          {/* Time and audience */}
          <div className="flex items-center gap-1 text-xs text-secondary-foreground">
            <span>{timeAgo(createdAt)}</span>
            <span aria-hidden>·</span>
            <GiEarthAsiaOceania />
          </div>
        </div>
      </div>

      {/* Actions right */}
      <HeaderProvider>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"action"} size={"lg"}>
              <BiDotsHorizontalRounded size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={-5}
            className="shadow-card-box w-72 border-none p-2"
          >
            <HeaderItem
              title="Hide post"
              description="See fewer posts like this"
            />

            <PopoverArrow
              height={8}
              width={15}
              className=" fill-white drop-shadow-md"
            />
          </PopoverContent>
        </Popover>
      </HeaderProvider>
    </header>
  );
}
