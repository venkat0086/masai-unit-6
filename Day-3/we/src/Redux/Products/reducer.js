import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
} from "./action";

const initState = {
  loading: false,
  error: false,
  products: [],
};

export const productsReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return { ...store, loading: true };
    case GET_PRODUCTS:
      return { ...store, loading: false, products: [...payload], error: false };
    case GET_PRODUCTS_ERROR:
      return { ...store, loading: false, error: true };
    default:
      return store;
  }
};
