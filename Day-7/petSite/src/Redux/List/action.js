export const GET_LIST = "GET_LIST";
export const GET_LIST_LOADING = "GET_LIST_LOADING";
export const GET_LIST_ERROR = "GET_LIST_ERROR";

export const getList = (payload) => ({
  type: GET_LIST,
  payload,
});

export const getListLoading = () => ({
  type: GET_LIST_LOADING,
});
export const getListError = () => ({
  type: GET_LIST_ERROR,
});

export const getListData = () => (dispatch) => {
  dispatch(getListLoading());
  fetch(`https://heady-resonant-homburg.glitch.me/teachers`)
    .then((res) => res.json())
    .then((res) => dispatch(getList(res)))
    .catch((err) => dispatch(getListError()));
};
