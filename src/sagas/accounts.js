import { call, put, take } from 'redux-saga/effects';

import { api } from '../services';

import {
  FETCH_ACCOUNTS_REQUEST,
  fetchAccountsSuccess,
  fetchAccountsFailure,
  CREATE_ACCOUNT_REQUEST,
  createAccountSuccess,
  createAccountFailure,
} from '../actions/accounts';

const normalizeAccounts = (collection) => {
  return Object.entries(collection).map(account => ({
    id: account[1].id,
    name: account[1].attributes.name,
    description: account[1].attributes.description,
    category: account[1].attributes.category,
  }));
};

export function* fetchAccounts() {
  const { resolve, reject } = yield take(FETCH_ACCOUNTS_REQUEST);
  const { response, error } = yield call(api.fetchAccounts, localStorage.getItem('authToken'));

  if (response && !error) {
    resolve();
    let normalizedAccounts = [];
    if (Object.keys(response.body).length > 0) {
      normalizedAccounts = normalizeAccounts(response.body.account);
    }
    yield put(fetchAccountsSuccess(normalizedAccounts));
  } else {
    reject();
    yield put(fetchAccountsFailure(error));
  }
}

export function* createAccount() {
  const { values, resolve, reject } = yield take(CREATE_ACCOUNT_REQUEST);
  const { response, error } = yield call(
    api.createAccount,
    values.account_name,
    values.account_description,
    values.account_category,
    localStorage.getItem('authToken'),
  );

  if (response && !error) {
    resolve();
    let normalizedAccounts = [];
    if (Object.keys(response.body).length > 0) {
      normalizedAccounts = normalizeAccounts(response.body.account);
    }
    yield put(createAccountSuccess(normalizedAccounts[0]));
  } else {
    reject();
    yield put(createAccountFailure(error));
  }
}
