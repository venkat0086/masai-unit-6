import { createStore, combineReducers } from "redux";
import { restoReducer } from "./GetResto/reducer";
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  restuarants: restoReducer,
  register: registerReducer,
});

export const store = createStore(rootReducer);
