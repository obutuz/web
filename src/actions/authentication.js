export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const signInRequest = credentials => ({
  type: SIGN_IN_REQUEST,
  credentials,
});

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  authToken: data.access_token,
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  message: error.message,
});
