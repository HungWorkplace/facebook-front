import ThumbsUp from "@/components/svg/ThumbsUp";
import { FaRegComment } from "react-icons/fa";

// # Component
export default function Interact() {
  return (
    <div className="border-y border-[#ced0d4] py-1 text-sm text-[#5b626a]">
      <div className="flex h-9  w-full items-center">
        <div className="flex h-full flex-1 cursor-pointer items-center justify-center gap-2 rounded hover:bg-hover-item-radio">
          <ThumbsUp />
          <span className="font-semibold">Like</span>
        </div>
        <div className="flex h-full flex-1 cursor-pointer items-center justify-center gap-2 rounded hover:bg-hover-item-radio">
          <FaRegComment className="size-5 scale-x-[-1] transform" />
          <span className="font-semibold">Comment</span>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
