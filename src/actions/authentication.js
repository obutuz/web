export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const signInRequest = (values, resolve, reject) => ({
  type: SIGN_IN_REQUEST,
  values,
  resolve,
  reject,
});

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  authToken: data.access_token,
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  message: error.message,
});
