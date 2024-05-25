"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { url } from "@/utils/urls";
import { User } from "@/utils/definitions";

interface ContextValue {
  user: User | null;
}

interface UserContextProps {
  children: React.ReactNode;
}

const UserContext = createContext<ContextValue | null>(null);

const UserProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch the user from the API
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(url.profile.get, {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    fetchUser();
  }, []);

  const value = {
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Create a custom hook to access the UserContext
const useUser = (): ContextValue => {
  const value = useContext(UserContext);

  if (!value) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return value;
};

export { UserProvider, useUser };
