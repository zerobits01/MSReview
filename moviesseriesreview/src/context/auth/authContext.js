import { createContext, useContext } from "react";

export const authInitialState = {
  isAuthenticated: false,
  user: {},
};

export const authContext = createContext(authInitialState);
export const useAuthContext = () => useContext(authContext);
