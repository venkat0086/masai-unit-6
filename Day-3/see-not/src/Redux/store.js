import { createStore, combineReducers } from "redux";
import { restoReducer } from "./GetResto/reducer";
import { loginReducer } from "./Login/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  restuarants: restoReducer,
});

export const store = createStore(rootReducer);
