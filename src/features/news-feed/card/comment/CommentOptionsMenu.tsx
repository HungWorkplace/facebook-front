"use client";

import { Button } from "@/components/ui/custom/button";
import { cn } from "@/lib/utils";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverClose,
} from "../header/custom/popover";
import { useCommentContext } from "./context/comment-context";
import { useRef } from "react";
import axios from "axios";
import { url } from "@/routes";
import { Comment } from "@/types/model";

interface CommentOptionsMenuProps {
  className?: string;
  comment: Comment;
}

// # Component
export default function CommentOptionsMenu({
  className,
  comment,
}: CommentOptionsMenuProps) {
  const { deleteComment } = useCommentContext();
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleDeleteClick = async () => {
    deleteComment(comment._id);
    closeRef.current?.click();

    try {
      await axios.delete(
        url.comments.delete.deleteComment(comment.post, comment._id),
        {
          withCredentials: true,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"action"} size={"md"} className={cn(className)}>
          <BiDotsHorizontalRounded size={17} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        sideOffset={-5}
        className="shadow-card-box w-80 border-none p-2"
      >
        <div
          onClick={handleDeleteClick}
          className="cursor-pointer rounded-md p-1 text-2xs font-semibold hover:bg-hover-item-radio"
        >
          Delete
        </div>

        <PopoverClose ref={closeRef} className="hidden" />

        <PopoverArrow
          height={8}
          width={15}
          className=" fill-white drop-shadow-md"
        />
      </PopoverContent>
    </Popover>
  );
}
