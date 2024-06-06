"use client";

import { useEffect, useState } from "react";
import Statistics from "../body/Statistics";
import Interact from "./Interact";
import { Post, User } from "@/types/api";

interface ReactionProps {
  post: Post;
  user: User | undefined;
}

// # Component
export default function Reaction({ post, user }: ReactionProps) {
  const [likedUserIds, setLikedUserIds] = useState<string[]>([]);
  const [liked, setLiked] = useState(false);

  // Initialize the likedUserIds and liked state
  useEffect(() => {
    if (post.likes.length <= 0 || !user) return;

    setLikedUserIds(post.likes);
    setLiked(post.likes.includes(user.id));
  }, [post.likes]);

  // When liked state changes, add or remove the user id from the likedUserIds
  useEffect(() => {
    if (!user) return;

    if (liked) {
      setLikedUserIds((prev) => [...prev, user.id]);
    } else {
      setLikedUserIds((prev) => prev.filter((id) => id !== user.id));
    }
  }, [liked]);

  return (
    <div>
      <Statistics postLikes={likedUserIds} />
      <Interact liked={liked} setLiked={setLiked} postId={post._id} />
    </div>
  );
}
