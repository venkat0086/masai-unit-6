import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { listReducer } from "./List/reducer";
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  teachers: listReducer,
});

export const store = createStore(rootReducer, enhancer);
