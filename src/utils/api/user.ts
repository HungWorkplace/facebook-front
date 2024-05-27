import { getToken } from "@/utils/api/getToken";
import { url } from "@/utils/urls";
import { cache } from "react";
import { users } from "@/utils/api/dummyData";
import { User } from "@/types/api";

// Todo: Uncomment the code below
export const fetchUser = cache(async () => {
  // const token = getToken();
  // if (!token) {
  //   return undefined;
  // }
  // try {
  //   const response = await fetch(url.profile.get, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const res = (await response.json()) as { user: User };
  //   return res.user;
  // } catch (error) {
  //   console.error(error);
  // }

  return users[0] as User | null;
});
