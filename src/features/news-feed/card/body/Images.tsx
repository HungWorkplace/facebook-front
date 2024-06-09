"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Post } from "@/types/model";
import { useEffect, useState } from "react";
import { BsImageAlt } from "react-icons/bs";
import NextImage from "next/image";

interface ImagesProps {
  post: Post;
}

// # Component
export default function Images({ post }: ImagesProps) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    if (post.images.length > 0) {
      const img = new Image();
      img.src = post.images[0].url;

      img.onload = () => {
        const ratio = img.width / img.height;
        setAspectRatio(ratio >= 1 ? 1.91 : 4 / 5);
      };
    }
  }, [post.images]);

  if (!aspectRatio)
    return (
      <div className="flex h-64 w-full animate-pulse items-center justify-center bg-gray-200">
        <BsImageAlt className="text-white" size={50} />
      </div>
    );

  return (
    // Don't use AspectRatio.Root here, because it doesn't have 'use client' in it
    <AspectRatio ratio={aspectRatio} className="mt-2">
      <NextImage
        src={post.images[0].url}
        width={500}
        height={617}
        alt="post"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  );
}
