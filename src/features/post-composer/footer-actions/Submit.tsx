"use client";

import { Button } from "@/components/ui/custom/button";
import { useDialogContext } from "../context/dialog-context";
import axios from "axios";
import { url } from "@/MVC/routes";
import { useRef, useState } from "react";
import { DialogClose } from "../custom/dialog";
import { useRouter } from "next/navigation";
import { headersTokenClient } from "@/MVC/utils/headersTokenClient";

// # Component
export default function Submit() {
  const { content, setContent, photoFile, privacy } = useDialogContext();
  const [isLoading, setIsLoading] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    if (content.length === 0) return console.log("Please enter a content");

    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("privacy", privacy);

      if (photoFile) {
        formData.append("images", photoFile);
      }

      setIsLoading(true);

      const headers = await headersTokenClient();

      await axios.post(url.posts.post.createPost, formData, headers);

      setIsLoading(false);
      router.refresh();
      setContent("");
      closeRef.current?.click();
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogClose ref={closeRef} className="hidden" />
      <Button
        onClick={handleSubmit}
        variant="default"
        disabled={content.length === 0}
        isLoading={isLoading}
        className="mx-4 mt-4 disabled:cursor-no-drop disabled:bg-secondary-button-background disabled:text-disabled-button-text disabled:opacity-100"
      >
        Post
      </Button>
    </>
  );
}
