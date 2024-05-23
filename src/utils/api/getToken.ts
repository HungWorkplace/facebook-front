import { cookies } from "next/headers";

export const getToken = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt");
  return token?.value;
};
