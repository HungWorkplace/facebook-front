import { Post } from "@/types/model";
import { ItemProvider } from "./context/item-context";
import PostItem from "./card/PostItem";

interface ItemProps {
  post: Post;
}

// # Component
// news feed post item
export default async function NewsFeedItem({ post }: ItemProps) {
  return (
    <ItemProvider>
      <PostItem post={post} />
    </ItemProvider>
  );
}
