import axios from "axios";

export const headersTokenClient = async () => {
  const res = await axios.get("/api/get-token");
  const token = res.data.token;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
