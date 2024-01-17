import { createContext } from "react";
import { signal } from "signals-react-safe";

export const navState = signal({
  currentNav: "",
  navNumber: 0,
});

export const AppState = createContext(navState);
