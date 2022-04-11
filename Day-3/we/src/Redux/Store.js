import { createStore, combineReducers } from "redux";
import { loginReducer } from "./Login/reducer";
import { productsReducer } from "./Products/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  products: productsReducer,
});

export const store = createStore(rootReducer);
