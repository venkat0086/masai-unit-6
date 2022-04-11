export const GET_RESTO = "GET_RESTO";
export const GET_RESTO_LOADING = "GET_RESTO_LOADING";
export const GET_RESTO_ERROR = "GET_RESTO_ERROR";

//action creator
export const getProducts = (payload) => ({
  type: GET_RESTO,
  payload,
});

export const getProductsLoading = () => ({
  type: GET_RESTO_LOADING,
});

export const getProductsError = () => ({
  type: GET_RESTO_ERROR,
});
