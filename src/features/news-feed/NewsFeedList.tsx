import Card from "@/components/layouts/Card";
import Header from "./Header";
import { posts } from "@/utils/api/dummyData";

// # Component
export default function NewsFeedList() {
  return (
    <>
      {posts.map((post) => (
        <Card key={post._id}>
          <Header user={post.user} />
          <div className="p-4">{post.content}</div>
        </Card>
      ))}
    </>
  );
}
