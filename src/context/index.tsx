"use client";

import React, {
  createContext,
  useState,
  useEffect,
  type PropsWithChildren,
} from "react";
import axios from "axios";
import { url } from "@/lib/urls";

// Define the shape of the user object
type User = {
  id: string;
  firstName: string;
  surName: string;
  phone: string;
  email: string;
  password: string;
  birthday: Date;
  gender: "male" | "female" | "other";
  createdAt: Date;
};

type Response =
  | {
      user: User;
    }
  | {
      error: string;
    };

// Create the context
export const UserContext = createContext<User | null>(null);

// Create a provider component
export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch the user from the database on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get<Response>(url.profile.get, {
          withCredentials: true,
        });

        if (res.data && "user" in res.data) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Create a custom hook to consume the user context
export const useUser = () => {
  const user = React.useContext(UserContext);
  return user;
};
