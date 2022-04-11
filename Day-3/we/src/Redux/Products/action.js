//action types

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

//action creator
export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const getProductsLoading = () => ({
  type: GET_PRODUCTS_LOADING,
});

export const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
});
