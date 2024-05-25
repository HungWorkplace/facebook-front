"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface ComposeValue {
  openPhoto: boolean;
  switchPhotoMode: () => void;
}

interface ComposeProviderProps {
  children: ReactNode;
}

// Create the context
const ComposeContext = createContext<ComposeValue | undefined>(undefined);

// Provider
export const ComposeProvider: React.FC<ComposeProviderProps> = ({
  children,
}) => {
  const [openPhoto, setOpenPhoto] = useState(false);

  const switchPhotoMode = () => {
    setOpenPhoto((prev) => !prev);
  };

  const value = {
    openPhoto,
    switchPhotoMode,
  };

  return (
    <ComposeContext.Provider value={value}>{children}</ComposeContext.Provider>
  );
};

// Custom hook
export const useCompose = (): ComposeValue => {
  const context = useContext(ComposeContext);
  if (context === undefined) {
    throw new Error("useComposeContext must be used within a ComposeProvider");
  }
  return context;
};
