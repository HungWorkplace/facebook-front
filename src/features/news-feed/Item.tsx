import Card from "@/components/layouts/Card";
import { Post } from "@/types/api";
import Header from "./Header";

interface ItemProps {
  post: Post;
}

// # Component
export default function Item({ post }: ItemProps) {
  return (
    <Card key={post._id}>
      <Header post={post} />
      <div className="p-4">{post.content}</div>
    </Card>
  );
}
