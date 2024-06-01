"use server";
import { getToken } from "@/utils/api/getToken";
import { url } from "@/utils/urls";
import { User } from "@/types/api";
import { cache } from "react";

export const getUserWithToken = cache(async () => {
  const token = getToken();
  if (!token) {
    return undefined;
  }
  try {
    const response = await fetch(url.profile.get, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const res = (await response.json()) as { user: User };
    return res.user;
  } catch (error) {
    console.error(error);
  }
});
