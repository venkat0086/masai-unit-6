import { createContext, useReducer } from "react";

const initState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_PASS":
      return { ...state, password: action.payload };
    default:
      throw new Error();
  }
};

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const { email, password } = state;

  return (
    <LoginContext.Provider value={{ email, password, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
