import { GET_LIST, GET_LIST_ERROR, GET_LIST_LOADING } from "./action";

const initState = {
  loading: false,
  error: false,
  teachers: [],
};

export const listReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_LIST_LOADING:
      return { ...store, loading: true };
    case GET_LIST:
      return {
        ...store,
        loading: false,
        teachers: [...payload],
        error: false,
      };
    case GET_LIST_ERROR:
      return {
        ...store,
        error: true,
        loading: false,
        teachers: [],
      };
    default:
      return store;
  }
};
