"use client";

import { User } from "@/types/api";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface ProfileValue {
  userProfile: User;
  setUserProfile: (user: User) => void;
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
  const [userProfile, setUserProfile] = useState(user);

  const value: ProfileValue = {
    userProfile,
    setUserProfile,
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
