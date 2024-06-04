// export type Gender = "male" | "female" | "other";

export type User = {
  _id: string;
  id: string;
  firstName: string;
  phone?: string;
  email: string;
  birthday: string;
  userSetting: {
    postPrivacy: "public" | "private";
  };
  gender: "male" | "female" | "other";
  createdAt: string;
  surname: string;
  fullName: string;
  avatar?: {
    id: string;
    url: string;
    public_id?: string;
  };
  friends: User[];
};

export type Post = {
  _id: string;
  user: User;
  content: string;
  image?: string;
  createdAt: string;
};
