"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface MyContextValue {
  state: string;
  updateState: (newState: string) => void;
}

interface MyProviderProps {
  children: ReactNode;
}

// Create the context
const MyContext = createContext<MyContextValue | undefined>(undefined);

// Provider
export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [state, setState] = useState<string>("default value");

  const updateState = (newState: string) => {
    setState(newState);
  };

  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook
export const useMyContext = (): MyContextValue => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
