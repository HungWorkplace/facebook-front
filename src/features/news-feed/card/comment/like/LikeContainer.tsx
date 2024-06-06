"use client";

import { useState } from "react";
import LikeClick from "./LikeClick";
import LikeComment from "./LikeComment";
import { Comment } from "@/types/api";

interface LikeContainerProps {
  comment: Comment;
}

// # Component
export default function LikeContainer({ comment }: LikeContainerProps) {
  const [likes, setLikes] = useState(comment.likes);

  const changeLikes = (type: "add" | "remove", userId: string) => {
    if (type === "add") {
      setLikes((prev) => [...prev, userId]);
    } else {
      setLikes((prev) => prev.filter((id) => id !== userId));
    }
  };

  return (
    <>
      <LikeClick
        likes={likes}
        commentId={comment._id}
        changeLikes={changeLikes}
      />
      <LikeComment length={likes.length} className="flex-1 pr-1" />
    </>
  );
}
