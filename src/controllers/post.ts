import { url } from "@/routes";
import { headersConfig } from "./user";
import { Comment, Post } from "@/types/model";

export const getPostsInNewsFeed = async () => {
  const headers = headersConfig();

  try {
    const response = await fetch(url.posts.get.getPostsInNewsFeed, {
      headers,
    });

    const res = (await response.json()) as { posts: Post[] };
    return res.posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPostsByUserId = async (userId: string) => {
  const headers = headersConfig();

  try {
    const response = await fetch(url.posts.get.getPostsByUserId(userId), {
      headers,
    });

    const res = (await response.json()) as { posts: Post[] };
    return res.posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCommentsByPostId = async (postId: string) => {
  try {
    const response = await fetch(url.posts.get.getCommentsByPostId(postId));

    const res = (await response.json()) as { comments: Comment[] };
    return res.comments;
  } catch (error) {
    console.error(error);
    return [];
  }
};
