import React, { useContext } from "react";

export const initialState = {
  loading: false,
  platos: [],
  menu: [],
  userToken: "",
};

export const ActionTypes = {
  setLoading: "SET_LOADING",
  setPlatos: "SET_PLATOS",
  setMenu: "SET_MENU",
  setUserToken: "Set_USER_TOKEN",
  removeMenu: "REMOVE_MENU"
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
    case ActionTypes.setMenu: {
      return { ...state, menu: [...state.menu, action.newValue]};
    }
    case ActionTypes.removeMenu: {
      return { ...state, menu: state.menu.filter(p => {
        return p.id !== action.newValue})}
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