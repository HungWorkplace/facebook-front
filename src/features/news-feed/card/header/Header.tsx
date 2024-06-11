import { Button } from "@/components/ui/custom/button";
import { Post } from "@/types/model";
import { timeAgo } from "@/utils/timeAgo";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaLock } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
} from "./custom/popover";
import Link from "next/link";
import { DeletePost } from "./HeaderItem";
import { AvatarName } from "@/components/AvatarName";
import { getUser } from "@/MVC/controllers/user";
import VerifyIcon from "@/components/svg/VerifyIcon";

interface HeaderProps {
  post: Post;
}

// # Component
// header of post
export default async function Header({ post }: HeaderProps) {
  const user = await getUser();
  const { author, createdAt, privacy } = post;

  return (
    <header className="flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        {/* Avatar */}
        <Link href={"/users/" + author.id}>
          <AvatarName.Root user={author}>
            <AvatarName.Image />
          </AvatarName.Root>
        </Link>

        <div className="flex flex-col justify-center">
          {/* User name */}
          <div className="flex items-center space-x-1.5">
            <Link
              href={"/users/" + author.id}
              className="text-2xs font-semibold text-primary-foreground hover:underline"
            >
              {author.fullName}
            </Link>

            {author.isVerified && <VerifyIcon size={12} />}
          </div>

          {/* Time and audience */}
          <div className="flex items-center gap-1 text-xs text-secondary-foreground">
            <span>{timeAgo(createdAt)}</span>
            <span aria-hidden>·</span>
            {privacy === "public" && <GiEarthAsiaOceania />}
            {privacy === "private" && <FaLock size={"0.9em"} />}
          </div>
        </div>
      </div>

      {/* Actions right */}

      {user._id === author._id && (
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
            <DeletePost postId={post._id} />

            <PopoverArrow
              height={8}
              width={15}
              className=" fill-white drop-shadow-md"
            />
          </PopoverContent>
        </Popover>
      )}
    </header>
  );
}
