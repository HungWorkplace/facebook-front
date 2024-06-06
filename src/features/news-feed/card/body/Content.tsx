import { Post } from "@/types/api";
import Images from "./Images";

interface ContentProps {
  post: Post;
}

// # Component
export default function Content({ post }: ContentProps) {
  return (
    <div className="text-2xs pt-2">
      <div>{post.content}</div>
      {post.images.length > 0 && <Images post={post} />}
    </div>
  );
}
