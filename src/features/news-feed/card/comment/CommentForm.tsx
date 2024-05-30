"use client";

import { useItemContext } from "../../context/item-context";
import * as ContentEditable from "./content-editable";
import { IoSend } from "react-icons/io5";

// # Component
export default function CommentForm() {
  const { goToComment } = useItemContext();

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-comment-background">
      <ContentEditable.Root>
        <ContentEditable.Input
          scrollIntoView={goToComment}
          placeholder="Write a comment"
          className="pr-4"
        />

        <ContentEditable.Action className="group flex justify-between py-2 pl-3 pr-4 data-[clicked=false]:hidden">
          <div className="flex-1"></div>
          <IoSend
            size={16}
            className="cursor-pointer group-data-[clicked=false]:text-[#bec3c9] group-data-[clicked=true]:text-primary"
          />
        </ContentEditable.Action>
      </ContentEditable.Root>
    </div>
  );
}
