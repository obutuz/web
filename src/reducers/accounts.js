import {
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
} from '../actions/accounts';

const initialState = {
  fetchAccounts: {
    accounts: [],
    isFetching: false,
    success: false,
  },
};

const accounts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ACCOUNTS_REQUEST:
      return {
        ...state,
        fetchAccounts: {
          accounts: [],
          isFetching: true,
          success: false,
        },
      };
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        fetchAccounts: {
          accounts: payload.accounts,
          isFetching: false,
          success: true,
        },
      };
    default:
      return state;
  }
};

export default accounts;
