import { createContext, useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  date_of_birth: "",
  state_of_residence: "",
  address: "",
  pincode: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "DOB":
      return { ...state, date_of_birth: action.payload };
    case "STATE_OF_RESIDENCE":
      return { ...state, state_of_residence: action.payload };
    case "ADDRESS":
      return { ...state, address: action.payload };
    case "PINCODE":
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
};

export const RegisterContext = createContext();

export function RegisterContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, age, date_of_birth, state_of_residence, address, pincode } =
    state;

  return (
    <RegisterContext.Provider
      value={{
        name,
        age,
        date_of_birth,
        state_of_residence,
        address,
        pincode,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
