"use client";

import { Comment, User } from "@/types/api";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CommentState extends Comment {
  status?: "loading" | "success" | "error";
}

// Define the shape of the context value
interface CommentValue {
  postId: string;
  commentsState: CommentState[];
  pendingComment: (user: User, postId: string, content: string) => void;
  successComment: (newId: string) => void;
  errorComment: () => void;
}

interface CommentProviderProps {
  children: ReactNode;
  comments: CommentState[];
  postId: string;
}

// Create the context
const CommentContext = createContext<CommentValue | null>(null);

// Provider
export const CommentProvider: React.FC<CommentProviderProps> = ({
  children,
  comments,
  postId,
}) => {
  const [commentsState, setCommentsState] = useState<CommentState[]>(comments);

  // add a new comment with status "loading"
  const pendingComment = (user: User, postId: string, content: string) => {
    const waitingComment: CommentState = {
      _id: "waiting",
      content,
      author: user,
      post: postId,
      likes: [],
      status: "loading",
      createdAt: new Date().toISOString(),
    };

    setCommentsState((prevComments) => [...prevComments, waitingComment]);
  };

  // change item with _id: "waiting" to _id: newId and status to "success"
  const successComment = (newId: string) => {
    setCommentsState((prevComments) =>
      prevComments.map((comment) =>
        comment._id === "waiting"
          ? { ...comment, _id: newId, status: "success" }
          : comment,
      ),
    );
  };

  // item of _id: "waiting", change status to "error"
  const errorComment = () => {
    setCommentsState((prevComments) =>
      prevComments.map((comment) =>
        comment._id === "waiting" ? { ...comment, status: "error" } : comment,
      ),
    );
  };

  const value: CommentValue = {
    postId,
    commentsState,
    pendingComment,
    successComment,
    errorComment,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

// Custom hook
export const useCommentContext = (): CommentValue => {
  const context = useContext(CommentContext);
  if (context === null) {
    throw new Error("useCommentContext must be used within a CommentProvider");
  }
  return context;
};
