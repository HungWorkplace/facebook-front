import Card from "@/components/layouts/Card";
import { Post } from "@/types/api";
import Header from "./card/header/Header";
import Content from "./card/body/Content";
import Statistics from "./card/body/Statistics";
import Interact from "./card/interact/Interact";
import Comment from "./card/comment/Comment";
import CommentBox from "./card/comment/CommentBox";
import { ItemProvider } from "./context/item-context";

interface ItemProps {
  post: Post;
}

// # Component
export default function Item({ post }: ItemProps) {
  return (
    <ItemProvider>
      <Card className="text-primary-foreground">
        <Header post={post} />
        <Content content={post.content} />
        <Statistics />
        <Interact />
        <Comment className="pb-2" />
        <CommentBox />
      </Card>
    </ItemProvider>
  );
}