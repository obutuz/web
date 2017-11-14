export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';
export const FETCH_ACCOUNT_REQUEST = 'FETCH_ACCOUNT_REQUEST';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE';
export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';
export const UPDATE_ACCOUNT_REQUEST = 'UPDATE_ACCOUNT_REQUEST';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAILURE = 'UPDATE_ACCOUNT_FAILURE';
export const DELETE_ACCOUNT_REQUEST = 'DELETE_ACCOUNT_REQUEST';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_FAILURE = 'DELETE_ACCOUNT_FAILURE';

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

export const fetchAccountRequest = (resolve, reject, id) => ({
  type: FETCH_ACCOUNT_REQUEST,
  resolve,
  reject,
  id,
});

export const fetchAccountSuccess = account => ({
  type: FETCH_ACCOUNT_SUCCESS,
  account,
});

export const fetchAccountFailure = error => ({
  type: FETCH_ACCOUNT_FAILURE,
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

export const updateAccountRequest = (values, resolve, reject) => ({
  type: UPDATE_ACCOUNT_REQUEST,
  values,
  resolve,
  reject,
});

export const updateAccountSuccess = account => ({
  type: UPDATE_ACCOUNT_SUCCESS,
  account,
});

export const updateAccountFailure = error => ({
  type: UPDATE_ACCOUNT_FAILURE,
  message: error.message,
});

export const deleteAccountRequest = (id, resolve, reject) => ({
  type: DELETE_ACCOUNT_REQUEST,
  id,
  resolve,
  reject,
});

export const deleteAccountSuccess = () => ({
  type: DELETE_ACCOUNT_SUCCESS,
});

export const deleteAccountFailure = error => ({
  type: DELETE_ACCOUNT_FAILURE,
  message: error.message,
});
