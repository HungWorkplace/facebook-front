"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import { StoreType, createZustandStore } from ".";

export const ZustandStoreContext = createContext<StoreApi<StoreType> | null>(
  null,
);

export interface ZustandStoreProviderProps {
  children: ReactNode;
}

export const ZustandProvider = ({ children }: ZustandStoreProviderProps) => {
  const storeRef = useRef<StoreApi<StoreType>>();
  if (!storeRef.current) {
    storeRef.current = createZustandStore();
  }

  return (
    <ZustandStoreContext.Provider value={storeRef.current}>
      {children}
    </ZustandStoreContext.Provider>
  );
};

export const useZustandStore = <T,>(selector: (store: StoreType) => T): T => {
  const counterStoreContext = useContext(ZustandStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useZustandStore must be use within ZustandProvider`);
  }

  return useStore(counterStoreContext, selector);
};
