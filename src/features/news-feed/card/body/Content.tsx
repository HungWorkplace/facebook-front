import { Post } from "@/types/model";
import Images from "./Images";

interface ContentProps {
  post: Post;
}

// # Component
export default function Content({ post }: ContentProps) {
  return (
    <div className="pt-2">
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="prose px-4 text-2xs"
      />
      {post.images.length > 0 && <Images post={post} />}
    </div>
  );
}
