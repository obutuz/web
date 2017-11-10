export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';
export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';

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

export const createAccountRequest = (values, resolve, reject) => ({
  type: CREATE_ACCOUNT_REQUEST,
  values,
  resolve,
  reject,
});

export const createAccountSuccess = account => ({
  type: CREATE_ACCOUNT_SUCCESS,
  account,
});

export const createAccountFailure = error => ({
  type: CREATE_ACCOUNT_FAILURE,
  message: error.message,
});
