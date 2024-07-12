"use client";

import { useUser } from "@/context/user-context";
import { cn } from "@/lib/utils";
import { url } from "@/MVC/routes";
import { headersTokenClient } from "@/MVC/utils/headersTokenClient";
import axios from "axios";
import { useEffect, useState } from "react";

interface LikeClickProps {
  likes: string[];
  changeLikes: (type: "add" | "remove", userId: string) => void;
  commentId: string;
}

// # Component
export default function LikeClick({
  likes,
  changeLikes,
  commentId,
}: LikeClickProps) {
  const user = useUser();
  const [isLiked, setIsLiked] = useState(likes.includes(user._id));

  useEffect(() => {
    setIsLiked(likes.includes(user._id));
  }, [user._id, likes]);

  const handleLikeClick = async () => {
    changeLikes(isLiked ? "remove" : "add", user._id);
    try {
      const headers = await headersTokenClient();

      await axios.patch(url.comments.patch.likeComment(commentId), {}, headers);
    } catch (error) {
      console.error(error);
      changeLikes(isLiked ? "remove" : "add", user._id);
    }
  };

  return (
    <span
      onClick={handleLikeClick}
      className={cn("cursor-pointer select-none font-bold hover:underline", {
        "text-primary": isLiked,
      })}
    >
      Like
    </span>
  );
}
