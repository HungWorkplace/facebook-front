"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface HeaderValue {
  openPopover: boolean;
  setOpenPopover: (value: boolean) => void;
}

interface HeaderProviderProps {
  children: ReactNode;
}

// Create the context
const HeaderContext = createContext<HeaderValue | null>(null);

// Provider
export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const value: HeaderValue = {
    openPopover,
    setOpenPopover,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

// Custom hook
export const useHeaderContext = (): HeaderValue => {
  const context = useContext(HeaderContext);
  if (context === null) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
