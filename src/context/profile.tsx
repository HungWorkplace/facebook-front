"use client";

import { User } from "@/types/model";
import React, { createContext, useContext, ReactNode } from "react";

// Define the shape of the context value
interface ProfileValue {
  userProfile: User;
}

interface ProfileProviderProps {
  children: ReactNode;
  user: User;
}

// Create the context
const ProfileContext = createContext<ProfileValue | null>(null);

// Provider
export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
  user,
}) => {
  const userProfile = user;

  const value: ProfileValue = {
    userProfile,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

// Custom hook
export const useProfileContext = (): ProfileValue => {
  const context = useContext(ProfileContext);
  if (context === null) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};
