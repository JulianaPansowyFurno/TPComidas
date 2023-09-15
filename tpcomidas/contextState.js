import React, { useContext } from "react";

export const initialState = {
  loading: false,
  platos: [],
  userToken: "",
};

export const ActionTypes = {
  setLoading: "SET_LOADING",
  setPlatos: "SET_PLATOS",
  setUserToken: "Set_USER_TOKEN",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setLoading: {
      return { ...state, loading: action.newValue };
    }
    case ActionTypes.setPlatos: {
      return { ...state, platos: action.newValue };
    }
    case ActionTypes.setUserToken: {
      return { ...state, userToken: action.newValue };
    }
    default: {
      return state;
    }
  }
};

export const initialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(initialContext);

export function ContextProvider({ children, state = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    state
  );

  return (
    <Context.Provider value={{ contextState, setContextState }}>
      {children}
    </Context.Provider>
  );
}

export const useContextState = () => useContext(Context);