// export type Gender = "male" | "female" | "other";

export type Privacy = "public" | "private";

type Image = {
  _id: string;
  url: string;
  public_id?: string;
};

type Comment = {
  _id: string;
  content: string;
  author: User;
  post: string;
  likes: string[];
  createdAt: string;
};

export type User = {
  _id: string;
  id: string;
  firstName: string;
  phone: string;
  email: string;
  birthday: string;
  userSettings: {
    postPrivacy: Privacy;
  };
  gender: "male" | "female" | "other";
  createdAt: string;
  surname: string;
  fullName: string;
  isVerified: boolean;
  avatar?: Image;
  friends?: User[];
};

export type Friend = {
  _id: string;
  id: string;
  firstName: string;
  surname: string;
  fullName: string;
  avatar: string;
};

export type Post = {
  _id: string;
  content: string;
  author: User;
  privacy: Privacy;
  images: Image[];
  likes: string[];
  comments: Comment[];
  createdAt: string;
};
