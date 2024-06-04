"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
export type SelectedImage = {
  base64: string;
  file?: File;
};

interface ProfileAvatarValue {
  isChose: boolean;
  setIsChose: (isChose: boolean) => void;
  selectedImage: SelectedImage | null;
  setSelectedImage: (selectedImage: SelectedImage) => void;
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
  // # State Value
  const [isChose, setIsChose] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null,
  );

  const value: ProfileAvatarValue = {
    isChose,
    setIsChose,
    selectedImage,
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
