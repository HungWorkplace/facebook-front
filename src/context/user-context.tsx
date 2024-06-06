"use client";

import React, { createContext, useContext } from "react";
import { User } from "@/types/api";

interface UserContextProps {
  children: React.ReactNode;
  user: User;
}

// interface ResponseValue {
//   user: User;
// }

const UserContext = createContext<User | null>(null);

const UserProvider = ({ children, user }: UserContextProps) => {
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   // Fetch the user from the API
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get<ResponseValue>(url.users.get.getMe, {
  //         withCredentials: true,
  //       });

  //       setUser(response.data.user);
  //     } catch (error) {
  //       console.error("Error fetching user", error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // const value = {
  //   user,
  // };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Create a custom hook to access the UserContext
const useUser = (): User => {
  const value = useContext(UserContext);

  if (!value) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return value;
};

export { UserProvider, useUser };
