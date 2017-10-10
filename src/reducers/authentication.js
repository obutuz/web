import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../actions/authentication';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  success: false,
  message: null,
  authToken: null,
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
    default:
      return state;
  }
};

export default authentication;
