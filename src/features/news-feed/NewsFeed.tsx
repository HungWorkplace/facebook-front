import { posts } from "@/utils/api/dummyData";
import Item from "./Item";
import { getPostsInNewsFeed } from "@/controllers/post";

// # Component
export default async function NewsFeed() {
  const posts = await getPostsInNewsFeed();

  return (
    <>
      {posts.map((post) => (
        <Item key={post._id} post={post} />
      ))}
    </>
  );
}
