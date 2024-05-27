"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface NewsFeedValue {
  openNotification: boolean;
  setOpenNotification: (value: boolean) => void;
}

interface NewsFeedProviderProps {
  children: ReactNode;
}

// Create the context
const NewsFeedContext = createContext<NewsFeedValue | null>(null);

// Provider
export const NewsFeedProvider: React.FC<NewsFeedProviderProps> = ({
  children,
}) => {
  const [openNotification, setOpenNotification] = useState(true);

  const value: NewsFeedValue = {
    openNotification,
    setOpenNotification,
  };

  return (
    <NewsFeedContext.Provider value={value}>
      {children}
    </NewsFeedContext.Provider>
  );
};

// Custom hook
export const useNewsFeedContext = (): NewsFeedValue => {
  const context = useContext(NewsFeedContext);
  if (context === null) {
    throw new Error(
      "useNewsFeedContext must be used within a NewsFeedProvider",
    );
  }
  return context;
};
