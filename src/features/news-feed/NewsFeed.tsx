import { posts } from "@/utils/api/dummyData";
import Item from "./Item";

// # Component
export default function NewsFeed() {
  const filteredPosts = [posts[1], posts[2]];

  return (
    <>
      {filteredPosts.map((post) => (
        <Item key={post._id} post={post} />
      ))}
    </>
  );
}
