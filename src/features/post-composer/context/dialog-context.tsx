"use client";

import { useUser } from "@/context/user-context";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Privacy = "public" | "private";

// Define the shape of the context value
interface DialogValue {
  openDialog: boolean;
  openPhoto: boolean;
  setOpenDialog: (open: boolean) => void;
  setOpenPhoto: (open: boolean) => void;
  privacy: Privacy;
  setPrivacy: (privacy: Privacy) => void;
  content: string;
  setContent: (content: string) => void;
  photoFile: File | null;
  setPhotoFile: (file: File | null) => void;
}

interface DialogProviderProps {
  children: ReactNode;
}

// Create the context
const DialogContext = createContext<DialogValue | null>(null);

// Provider
export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const user = useUser();
  const [openDialog, setOpenDialog] = useState(false);
  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [privacy, setPrivacy] = useState<Privacy>(
    user.userSettings.postPrivacy,
  );
  const [content, setContent] = useState("");

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
    privacy,
    setPrivacy,
    content,
    setContent,
    photoFile,
    setPhotoFile,
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
