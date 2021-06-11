import React, { useReducer } from "react";

import {
  authContext,
  authInitialState,
} from "./authContext";
import AuthContextReducer from "./authContextReducer";

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(
    AuthContextReducer,
    authInitialState
  );
  return ( // each state bydefault is an array of a state and the dispatcher method
    <authContext.Provider value={[state, dispatch]}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
