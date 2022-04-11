import { GET_RESTO, GET_RESTO_ERROR, GET_RESTO_LOADING } from "./action";

const initState = {
  loading: false,
  error: false,
  restuarants: [],
};

export const restoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_RESTO_LOADING:
      return { ...store, loading: true };
    case GET_RESTO:
      return {
        ...store,
        loading: false,
        restuarants: [...payload],
        error: false,
      };
    case GET_RESTO_ERROR:
      return { ...store, loading: false, error: true };
    default:
      return store;
  }
};
