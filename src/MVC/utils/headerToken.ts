import { redirect } from "next/navigation";
import { getToken } from "./getToken";

export const headersConfig = () => {
  const token = getToken();

  if (!token) {
    redirect("/login");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};
