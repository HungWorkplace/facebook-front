import { createStore } from "zustand/vanilla";

export type StateType = {
  composeRef: HTMLButtonElement | null;
};

export type ActionType = {
  setComposeRef: (ref: HTMLButtonElement | null) => void;
};

export type StoreType = StateType & ActionType;

export const defaultInitState: StateType = {
  composeRef: null,
};

export const createZustandStore = (initState: StateType = defaultInitState) => {
  return createStore<StoreType>()((set) => ({
    ...initState,
    setComposeRef: (ref) => set({ composeRef: ref }),
  }));
};
