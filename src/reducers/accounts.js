import {
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
} from '../actions/accounts';

const initialState = {
  fetchAccounts: {
    accounts: [],
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
    default:
      return state;
  }
};

export default accounts;
