import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/custom/button";
import { Post } from "@/types/api";
import { timeAgo } from "@/utils/timeAgo";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from "@/components/ui/popover";

import Link from "next/link";
import { cn } from "@/lib/utils";

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
        <UserAvatar user={user} />
        <div className="flex flex-col justify-center">
          {/* User name */}
          <Link href={"/"} className="text-sm font-semibold hover:underline">
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
          <Item title="Hide post" description="See fewer posts like this" />

          <PopoverArrow
            height={8}
            width={15}
            className=" fill-white drop-shadow-md"
          />
        </PopoverContent>
      </Popover>
    </header>
  );
}

interface ItemProps {
  title: string;
  description: string;
  className?: string;
}

export function Item({ title, description, className }: ItemProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-3 p-2 text-sm hover:bg-hover-item-radio",
        className,
      )}
    >
      <FaWindowClose size={20} />
      <div className="space-y-0.5">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-secondary-foreground">{description}</p>
      </div>
    </div>
  );
}
