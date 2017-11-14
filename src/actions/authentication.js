export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const USER_AUTHENTICATION_CHECK_REQUEST = 'USER_AUTHENTICATION_CHECK_REQUEST';
export const USER_AUTHENTICATION_CHECK_SUCCESS = 'USER_AUTHENTICATION_CHECK_SUCCESS';
export const USER_AUTHENTICATION_CHECK_FAILURE = 'USER_AUTHENTICATION_CHECK_FAILURE';

export const signInRequest = (values, resolve, reject) => ({
  type: SIGN_IN_REQUEST,
  values,
  resolve,
  reject,
});

export const signInSuccess = authToken => ({
  type: SIGN_IN_SUCCESS,
  authToken,
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  message: error.message,
});

export const signOutRequest = resolve => ({
  type: SIGN_OUT_REQUEST,
  resolve,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  message: error.message,
});

export const signUpRequest = (values, resolve, reject) => ({
  type: SIGN_UP_REQUEST,
  values,
  resolve,
  reject,
});

export const signUpSuccess = data => ({
  type: SIGN_UP_SUCCESS,
  authToken: data.access_token,
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  message: error.message,
});

export const userAuthenticationCheckRequest = (isAuthenticated, resolve, reject) => ({
  type: USER_AUTHENTICATION_CHECK_REQUEST,
  isAuthenticated,
  resolve,
  reject,
});

export const userAuthenticationCheckSuccess = () => ({
  type: USER_AUTHENTICATION_CHECK_SUCCESS,
});

export const userAuthenticationCheckFailure = () => ({
  type: USER_AUTHENTICATION_CHECK_FAILURE,
});
