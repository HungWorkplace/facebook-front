"use client";

import React, {
  createContext,
  useState,
  useEffect,
  type PropsWithChildren,
} from "react";
import axios from "axios";
import { url } from "@/lib/urls";
import { User } from "@/lib/definitions";
import { usePathname } from "next/navigation";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

type Response =
  | {
      user: User;
    }
  | {
      error: string;
    };

// Create the context
export const UserContext = createContext<UserContextType | null>(null);

// Create a provider component
export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  // Fetch the user from the database on component mount
  useEffect(() => {
    if (pathname === "login" || pathname === "signup") return;

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

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Create a custom hook to consume the user context
export const useUser = () => {
  const user = React.useContext<UserContextType | null>(UserContext)!;
  return user;
};
