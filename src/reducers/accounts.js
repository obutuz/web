import {
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from '../actions/accounts';

const initialState = {
  fetchAccounts: {
    accounts: [],
    isFetching: false,
    success: false,
    message: null,
  },
  createAccount: {
    account: null,
    isFetching: false,
    success: false,
    message: null,
  },
};

const accounts = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case FETCH_ACCOUNTS_REQUEST:
      return {
        ...state,
        fetchAccounts: {
          accounts: [],
          isFetching: true,
          success: false,
          message: null,
        },
      };
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        fetchAccounts: {
          accounts: payload.accounts,
          isFetching: false,
          success: true,
          message: null,
        },
      };
    case FETCH_ACCOUNTS_FAILURE:
      return {
        ...state,
        fetchAccounts: {
          accounts: [],
          isFetching: false,
          success: false,
          message: payload.message,
        },
      };
    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        createAccount: {
          account: null,
          isFetching: true,
          success: false,
          message: null,
        },
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccount: {
          account: payload.account,
          isFetching: false,
          success: true,
          message: null,
        },
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        createAccount: {
          account: null,
          isFetching: false,
          success: false,
          message: payload.message,
        },
      };
    default:
      return state;
  }
};

export default accounts;
