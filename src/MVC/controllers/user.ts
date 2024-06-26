import { url } from "@/MVC/routes";
import { Friend, Image, User } from "@/types/model";
// import { cache } from "react";
import { notFound } from "next/navigation";
import { headersConfig } from "../utils/headerToken";

export const getUser = async () => {
  const headers = headersConfig();

  const response = await fetch(url.users.get.getMe, {
    headers,
  });

  if (!response.ok) {
    notFound();
  }

  const res = (await response.json()) as { user: User };
  return res.user;
};

export const getUserById = async (userId: string) => {
  const response = await fetch(url.users.get.getUserById(userId));

  if (!response.ok) {
    notFound();
  }

  const res = (await response.json()) as { user: User };
  return res.user;
};

export const getFriends = async () => {
  const headers = headersConfig();

  try {
    const response = await fetch(url.users.get.getFriends, {
      headers,
    });

    const res = (await response.json()) as { friends: Friend[] };
    return res.friends;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getImagesByUserId = async (userId: string) => {
  const response = await fetch(url.users.get.getImagesByUserId(userId));

  if (!response.ok) {
    notFound();
  }

  const res = (await response.json()) as { images: Image[] };
  return res.images;
};
