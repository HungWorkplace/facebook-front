"use client";

import { FaTrashAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { PopoverClose } from "./custom/popover";
import { useRef } from "react";
import axios from "axios";
import { url } from "@/routes";
import { useRouter } from "next/navigation";

interface ItemProps {
  className?: string;
  postId: string;
}

export function DeletePost({ className, postId }: ItemProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleDeletePost = async () => {
    closeRef.current?.click();

    try {
      await axios.delete(url.posts.delete.deletePost(postId), {
        withCredentials: true,
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={handleDeletePost}
      className={cn(
        "flex cursor-pointer items-center gap-3 p-2 text-sm text-red-700 hover:bg-hover-item-radio",
        className,
      )}
    >
      <FaTrashAlt size={20} />

      <div className="space-y-0.5">
        <p className="font-semibold">Delete this post</p>
        <p className="text-xs text-secondary-foreground">
          This action cannot be undone
        </p>
      </div>

      <PopoverClose ref={closeRef} />
    </div>
  );
}
