"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Define the shape of the context value
interface PreventDrillingValue {
  value: any;
}

interface PreventDrillingProviderProps {
  children: ReactNode;
  value: any;
}

// Create the context
const PreventDrillingContext = createContext<PreventDrillingValue | null>(null);

// Provider
export const PreventDrillingProvider: React.FC<
  PreventDrillingProviderProps
> = ({ children, value }) => {
  return (
    <PreventDrillingContext.Provider value={value}>
      {children}
    </PreventDrillingContext.Provider>
  );
};

// Custom hook
export const usePreventDrillingContext = (): PreventDrillingValue => {
  const context = useContext(PreventDrillingContext);
  if (context === null) {
    throw new Error(
      "usePreventDrillingContext must be used within a PreventDrillingProvider",
    );
  }
  return context;
};
