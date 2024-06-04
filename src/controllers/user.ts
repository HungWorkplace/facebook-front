import { getToken } from "@/utils/api/getToken";
import { url } from "@/utils/urls";
import { User } from "@/types/api";
import { cache } from "react";
import { notFound, redirect } from "next/navigation";

export const getUser = cache(async () => {
  const token = getToken();
  if (!token) {
    redirect("/login");
  }

  const response = await fetch(url.users.get.getMe, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    notFound();
  }

  const res = (await response.json()) as { user: User };
  return res.user;
});

export const getUserById = cache(async (userId: string) => {
  const res = await fetch(url.users.get.getUserById(userId));

  if (!res.ok) {
    notFound();
  }

  return res.json();
});
