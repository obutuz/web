import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from '../actions/authentication';

const initialState = {
  isAuthenticated: !!localStorage.getItem('authToken'),
  isFetching: false,
  success: false,
  message: null,
  authToken: localStorage.getItem('authToken'),
};

const authentication = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        isFetching: true,
        success: false,
        message: null,
        authToken: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        success: true,
        message: null,
        authToken: payload.authToken,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isFetching: false,
        success: false,
        message: payload.message,
        authToken: null,
      };
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: true,
        success: false,
        message: null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isFetching: false,
        success: true,
        message: null,
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        success: false,
        message: payload.message,
      };
    default:
      return state;
  }
};

export default authentication;
