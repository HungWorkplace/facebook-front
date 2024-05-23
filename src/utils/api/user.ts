import { User } from "@/utils/definitions";
import { getToken } from "@/utils/api/getToken";
import { url } from "@/utils/urls";

export const fetchUser = async () => {
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
};
