import {
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,
} from '../actions/accounts';

const initialState = {
  accountsList: [],
  activeAccount: {
    id: '',
    name: '',
    description: '',
    category: '',
  },
  isFetching: false,
  success: false,
  message: null,
};

const accounts = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case FETCH_ACCOUNTS_REQUEST:
      return {
        ...state,
        accountsList: [],
        isFetching: true,
        success: false,
        message: null,
      };
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accountsList: payload.accounts,
        isFetching: false,
        success: true,
        message: null,
      };
    case FETCH_ACCOUNTS_FAILURE:
      return {
        ...state,
        accountsList: [],
        isFetching: false,
        success: false,
        message: payload.message,
      };
    case FETCH_ACCOUNT_REQUEST:
      return {
        ...state,
        activeAccount: initialState.activeAccount,
        isFetching: true,
        success: false,
        message: null,
      };
    case FETCH_ACCOUNT_SUCCESS:
      return {
        ...state,
        activeAccount: payload.account,
        isFetching: false,
        success: true,
        message: null,
      };
    case FETCH_ACCOUNT_FAILURE:
      return {
        ...state,
        activeAccount: initialState.activeAccount,
        isFetching: false,
        success: false,
        message: payload.message,
      };
    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        activeAccount: null,
        isFetching: true,
        success: false,
        message: null,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        activeAccount: payload.account,
        isFetching: false,
        success: true,
        message: null,
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        activeAccount: null,
        isFetching: false,
        success: false,
        message: payload.message,
      };
    case UPDATE_ACCOUNT_REQUEST:
      return {
        ...state,
        isFetching: true,
        success: false,
        message: null,
      };
    case UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        activeAccount: payload.account,
        isFetching: false,
        success: true,
        message: null,
      };
    case UPDATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        message: payload.message,
      };
    default:
      return state;
  }
};

export default accounts;
