import { Post } from "@/types/model";
import { ItemProvider } from "./context/item-context";
import { getCommentsByPostId } from "@/MVC/controllers/post";
import PostItem from "./card/PostItem";

interface ItemProps {
  post: Post;
}

// # Component
// news feed post item
export default async function NewsFeedItem({ post }: ItemProps) {
  const comments = await getCommentsByPostId(post._id);

  return (
    <ItemProvider>
      <PostItem post={post} comments={comments} />
    </ItemProvider>
  );
}
