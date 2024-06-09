const BASE_URL = "http://localhost:5000";

export const url = {
  auth: {
    get: {
      logout: `${BASE_URL}/auth/logout`,
    },
    post: {
      login: `${BASE_URL}/auth/login`,
      signup: `${BASE_URL}/auth/signup`,
    },
  },
  users: {
    get: {
      getMe: `${BASE_URL}/api/users/me`,
      getUserById: (userId: string) => `${BASE_URL}/api/users/${userId}`,
      getFriends: `${BASE_URL}/api/users/me/friends`,
      getImagesByUserId: (userId: string) =>
        `${BASE_URL}/api/users/${userId}/images`,
    },
    post: {
      uploadAvatar: `${BASE_URL}/api/users/avatar`,
    },
    patch: {
      updatePostPrivacy: `${BASE_URL}/api/users/me/post-privacy`,
    },
  },
  posts: {
    get: {
      getMyPosts: `${BASE_URL}/api/posts/me`,
      getPostsInNewsFeed: `${BASE_URL}/api/posts`,
      getPostsByUserId: (userId: string) =>
        `${BASE_URL}/api/posts/users/${userId}`,
      getCommentsByPostId: (postId: string) =>
        `${BASE_URL}/api/posts/${postId}/comments`,
    },
    post: {
      createPost: `${BASE_URL}/api/posts`,
    },
    patch: {
      likePost: (postId: string) => `${BASE_URL}/api/posts/${postId}/like`,
    },
    delete: {
      deletePost: (postId: string) => `${BASE_URL}/api/posts/${postId}`,
    },
  },
  comments: {
    post: {
      createComment: (postId: string) =>
        `${BASE_URL}/api/posts/${postId}/comments`,
    },
    patch: {
      likeComment: (commentId: string) =>
        `${BASE_URL}/api/posts/comments/${commentId}/like`,
    },
    delete: {
      deleteComment: (postId: string, commentId: string) =>
        `${BASE_URL}/api/posts/${postId}/comments/${commentId}`,
    },
  },
};
