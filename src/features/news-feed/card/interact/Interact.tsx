"use client";

import { FaRegComment } from "react-icons/fa";
import { useItemContext } from "../../context/item-context";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as regularLike } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidLike } from "@fortawesome/free-solid-svg-icons";
import styles from "./Interact.module.css";
import { url } from "@/routes";
import axios from "axios";

interface InteractProps {
  liked: boolean;
  setLiked: (liked: boolean) => void;
  postId: string;
}

// # Component
export default function Interact({ liked, setLiked, postId }: InteractProps) {
  const { triggerGoToComment } = useItemContext();

  // It sends a PATCH request to the server to like the post
  const handleLikeClick = async () => {
    const prevLiked = liked;
    setLiked(!liked);
    try {
      await axios.patch(
        url.posts.patch.likePost(postId),
        {},
        { withCredentials: true },
      );
    } catch (error) {
      console.error(error);
      setLiked(prevLiked);
    }
  };

  return (
    <div className="mb-3 mt-2 border-y border-[#ced0d4] py-1 text-sm text-[#5b626a]">
      <div className="flex h-9  w-full items-center">
        {/* Like button*/}
        <div
          onClick={handleLikeClick}
          className={cn(
            "flex h-full flex-1 cursor-pointer items-center justify-center gap-2 rounded hover:bg-hover-item-radio",
            { "text-[#0561f2]": liked },
          )}
        >
          <FontAwesomeIcon
            icon={liked ? solidLike : regularLike}
            className={cn("size-5", { [styles.liked]: liked })}
          />

          <span className="font-semibold">Like</span>
        </div>

        {/* Comment button*/}
        <div className="flex h-full flex-1 cursor-pointer items-center justify-center gap-2 rounded hover:bg-hover-item-radio">
          <FaRegComment className="size-5 scale-x-[-1] transform" />
          <span onClick={() => triggerGoToComment()} className="font-semibold">
            Comment
          </span>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
