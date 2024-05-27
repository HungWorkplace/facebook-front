"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface DialogValue {
  openDialog: boolean;
  openPhoto: boolean;
  setOpenDialog: (open: boolean) => void;
  setOpenPhoto: (open: boolean) => void;
}

interface DialogProviderProps {
  children: ReactNode;
}

// Create the context
const DialogContext = createContext<DialogValue | null>(null);

// Provider
export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openPhoto, setOpenPhoto] = useState(false);

  const openOrReset = (value: boolean) => {
    if (!value) {
      setOpenDialog(false);
      setOpenPhoto(false);
    }
    setOpenDialog(value);
  };

  const value: DialogValue = {
    openDialog,
    openPhoto,
    setOpenDialog: openOrReset,
    setOpenPhoto,
  };

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};

// Custom hook
export const useDialogContext = (): DialogValue => {
  const context = useContext(DialogContext);
  if (context === null) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
