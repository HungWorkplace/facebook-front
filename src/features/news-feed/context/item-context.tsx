"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface ItemValue {
  goToComment: number;
  triggerGoToComment: () => void;
}

interface ItemProviderProps {
  children: ReactNode;
}

// Create the context
const ItemContext = createContext<ItemValue | null>(null);

// Provider
export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [goToComment, setGoToComment] = useState(0);

  const triggerGoToComment = () => {
    setGoToComment((prev) => prev + 1);
  };

  const value: ItemValue = {
    goToComment,
    triggerGoToComment,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

// Custom hook
export const useItemContext = (): ItemValue => {
  const context = useContext(ItemContext);
  if (context === null) {
    throw new Error("useItemContext must be used within a ItemProvider");
  }
  return context;
};
