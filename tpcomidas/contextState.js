import React, { useContext } from "react";

export const initialState = {
  loading: false,
  platos: [],
  menu: [],
  userToken: "",
  contVeg: 0,
  contNotVeg: 0
};

export const ActionTypes = {
  setLoading: "SET_LOADING",
  setPlatos: "SET_PLATOS",
  setMenu: "SET_MENU",
  setUserToken: "Set_USER_TOKEN",
  removeMenu: "REMOVE_MENU",
  setVeganCount: "VEGAN_COUNT",
  setNotVeganCount: "NOT_VEGAN_COUNT"
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
      const menu2 = state.menu.filter(p => {
        return p.id !== action.newValue})
    return { ...state, menu: menu2}
    }
    case ActionTypes.setVeganCount: {
      return { ...state, contVeg: action.newValue}
    }
    case ActionTypes.setNotVeganCount: {
      return { ...state, contNotVeg: action.newValue}
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