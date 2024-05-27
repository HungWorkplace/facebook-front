export type Gender = "male" | "female" | "other";

export type User = {
  _id: string;
  firstName: string;
  phone?: string;
  email: string;
  birthday: Date;
  gender: Gender;
  createdAt: Date;
  surname: string;
  avatar?: string;
};

export type Post = {
  _id: string;
  user: User;
  content: string;
  image?: string;
  createdAt: Date;
};
