"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface DivTextAreaValue {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}

interface DivTextAreaProviderProps {
  children: ReactNode;
}

// Create the context
const DivTextAreaContext = createContext<DivTextAreaValue | null>(null);

// Provider
export const Root: React.FC<DivTextAreaProviderProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const value: DivTextAreaValue = {
    isClicked,
    setIsClicked,
  };

  return (
    <DivTextAreaContext.Provider value={value}>
      {children}
    </DivTextAreaContext.Provider>
  );
};

// Custom hook
export const useDivTextAreaContext = (): DivTextAreaValue => {
  const context = useContext(DivTextAreaContext);
  if (context === null) {
    throw new Error(
      "useDivTextAreaContext must be used within a DivTextArea.Root",
    );
  }
  return context;
};
