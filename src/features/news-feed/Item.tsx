import Card from "@/components/layouts/Card";
import { Post } from "@/types/api";
import Header from "./card/header/Header";
import Content from "./card/body/Content";
import { ItemProvider } from "./context/item-context";
import Reaction from "./card/interact/Reaction";
import { getUser } from "@/controllers/user";
import { getCommentsByPostId } from "@/controllers/post";
import { CommentProvider } from "./card/comment/context/comment-context";
import Comments from "./card/comment/Comments";
import CommentBox from "./card/comment/CommentBox";

interface ItemProps {
  post: Post;
}

// # Component
// news feed post item
export default async function Item({ post }: ItemProps) {
  const user = await getUser();
  const comments = await getCommentsByPostId(post._id);

  return (
    <ItemProvider>
      <Card className="text-primary-foreground">
        <Header post={post} />
        <Content post={post} />
        <Reaction post={post} user={user} />
        <CommentProvider comments={comments} postId={post._id}>
          <Comments className="pb-2" />
          <CommentBox />
        </CommentProvider>
      </Card>
    </ItemProvider>
  );
}
