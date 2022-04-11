//action types
export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_LOADING = "LOGIN_LOADING";

//action creator

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});
