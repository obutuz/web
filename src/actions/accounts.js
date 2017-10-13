export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';

export const fetchAccountsRequest = (resolve, reject) => ({
  type: FETCH_ACCOUNTS_REQUEST,
  resolve,
  reject,
});

export const fetchAccountsSuccess = accounts => ({
  type: FETCH_ACCOUNTS_SUCCESS,
  accounts,
});

export const fetchAccountsFailure = error => ({
  type: FETCH_ACCOUNTS_FAILURE,
  message: error.message,
});
