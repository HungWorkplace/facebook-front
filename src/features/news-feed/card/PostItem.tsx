import { Comment, Post } from "@/types/model";
import Card from "@/components/layouts/Card";
import Header from "./header/Header";
import Content from "../card/body/Content";
import Reaction from "./interact/Reaction";
import { CommentProvider } from "./comment/context/comment-context";
import Comments from "./comment/Comments";
import CommentBox from "./comment/CommentBox";
import { getUser } from "@/controllers/user";

interface PostProps {
  post: Post;
  comments: Comment[];
}

// # Component
export default async function PostItem({ post, comments }: PostProps) {
  const user = await getUser();

  return (
    <Card className="px-0 text-primary-foreground">
      <Header post={post} />
      <Content post={post} />
      <Reaction post={post} user={user} />
      <CommentProvider comments={comments} postId={post._id}>
        <Comments className="pb-2" />
        <CommentBox />
      </CommentProvider>
    </Card>
  );
}
