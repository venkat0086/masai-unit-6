import { GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING } from "./action";

const initState = {
  loading: false,
  error: false,
  todos: [],
};

export const todosReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING:
      return { ...store, loading: true };
    case GET_TODOS:
      return {
        ...store,
        loading: false,
        todos: [...payload],
        error: false,
      };
    case GET_TODOS_ERROR:
      return {
        ...store,
        error: true,
        loading: false,
        todos: [],
      };
    default:
      return store;
  }
};
