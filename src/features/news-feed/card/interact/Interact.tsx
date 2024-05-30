"use client";

import { FaRegComment } from "react-icons/fa";
import { useItemContext } from "../../context/item-context";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as regularLike } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidLike } from "@fortawesome/free-solid-svg-icons";
import styles from "./Interact.module.css";

// # Component
export default function Interact() {
  const { triggerGoToComment } = useItemContext();
  const [like, setLike] = useState(false);

  return (
    <div className="border-y border-[#ced0d4] py-1 text-sm text-[#5b626a]">
      <div className="flex h-9  w-full items-center">
        {/* Like button*/}
        <div
          onClick={() => setLike((prev) => !prev)}
          className={cn(
            "flex h-full flex-1 cursor-pointer items-center justify-center gap-2 rounded hover:bg-hover-item-radio",
            { "text-[#0561f2]": like },
          )}
        >
          <FontAwesomeIcon
            icon={like ? solidLike : regularLike}
            className={cn("size-5", { [styles.like]: like })}
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
