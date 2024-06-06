"use client";

import { useState } from "react";
import { useItemContext } from "../../context/item-context";
import * as ContentEditable from "./content-editable";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { url } from "@/routes";
import { useCommentContext } from "./context/comment-context";
import { useUser } from "@/context/user-context";
import { Comment } from "@/types/api";

type ResponseValue = {
  comment: Comment;
};

// # Component
export default function CommentForm() {
  const { goToComment } = useItemContext();
  const [inputValue, setInputValue] = useState("");
  const { postId, pendingComment, successComment, errorComment } =
    useCommentContext();
  const user = useUser();

  const handleSubmit = async () => {
    setInputValue("");

    try {
      pendingComment(user, postId, inputValue);

      const response = await axios.post<ResponseValue>(
        url.comments.post.createComment(postId),
        {
          content: inputValue,
        },
        { withCredentials: true },
      );

      successComment(response.data.comment._id);
    } catch (error) {
      errorComment();
      console.error(error);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-comment-background">
      <ContentEditable.Root>
        <ContentEditable.Input
          placeholder="Write a comment"
          scrollIntoView={goToComment}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onEnter={handleSubmit}
          className="pr-4"
        />

        <ContentEditable.Action className="group flex justify-between py-2 pl-3 pr-4 data-[clicked=false]:hidden">
          <div className="flex-1"></div>
          <IoSend
            size={16}
            onClick={handleSubmit}
            className="cursor-pointer group-data-[clicked=false]:text-[#bec3c9] group-data-[clicked=true]:text-primary"
          />
        </ContentEditable.Action>
      </ContentEditable.Root>
    </div>
  );
}
