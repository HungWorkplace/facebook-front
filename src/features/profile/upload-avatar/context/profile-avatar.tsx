"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface ProfileAvatarValue {
  isChose: boolean;
  selectedImage: string | ArrayBuffer | null;
  setIsChose: (isChose: boolean) => void;
  setSelectedImage: (selectedImage: string | ArrayBuffer | null) => void;
}

interface ProfileAvatarProviderProps {
  children: ReactNode;
}

// Create the context
const ProfileAvatarContext = createContext<ProfileAvatarValue | null>(null);

// Provider
export const ProfileAvatarProvider: React.FC<ProfileAvatarProviderProps> = ({
  children,
}) => {
  const [isChose, setIsChose] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const value: ProfileAvatarValue = {
    isChose,
    selectedImage,
    setIsChose,
    setSelectedImage,
  };

  return (
    <ProfileAvatarContext.Provider value={value}>
      {children}
    </ProfileAvatarContext.Provider>
  );
};

// Custom hook
export const useProfileAvatarContext = (): ProfileAvatarValue => {
  const context = useContext(ProfileAvatarContext);
  if (context === null) {
    throw new Error(
      "useProfileAvatarContext must be used within a ProfileAvatarProvider",
    );
  }
  return context;
};
