import NewsFeedItem from "./Item";
import { getPostsByUserId, getPostsInNewsFeed } from "@/controllers/post";

interface NewsFeedProps {
  profileId?: string;
}

// # Component
export default async function NewsFeed({ profileId }: NewsFeedProps) {
  const posts = profileId
    ? await getPostsByUserId(profileId)
    : await getPostsInNewsFeed();

  return (
    <>
      {posts.map((post) => (
        <NewsFeedItem key={post._id} post={post} />
      ))}
    </>
  );
}
