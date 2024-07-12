"use client";

import React, { createContext, useContext } from "react";
import { User } from "@/types/model";

interface UserContextProps {
  children: React.ReactNode;
  user: User;
}

// interface ResponseValue {
//   user: User;
// }

const UserContext = createContext<User | null>(null);

const UserProvider = ({ children, user }: UserContextProps) => {
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
