import { createContext, useReducer } from "react";
import axios from "axios";

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

  const handleSubmit = () => {
    axios.post("http://localhost:8080/users", state).then((res) => {
      alert("Data Saved");
      window.location.reload();
    });
  };

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
        handleSubmit,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
