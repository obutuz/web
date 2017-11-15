import { call, put, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { api } from '../services';

import {
  FETCH_ACCOUNTS_REQUEST,
  fetchAccountsRequest,
  fetchAccountsSuccess,
  fetchAccountsFailure,
  FETCH_ACCOUNT_REQUEST,
  fetchAccountSuccess,
  fetchAccountFailure,
  CREATE_ACCOUNT_REQUEST,
  createAccountSuccess,
  createAccountFailure,
  UPDATE_ACCOUNT_REQUEST,
  updateAccountSuccess,
  updateAccountFailure,
  DELETE_ACCOUNT_REQUEST,
  deleteAccountSuccess,
  deleteAccountFailure,
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
  while (true) {
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
}

export function* fetchAccount() {
  while (true) {
    const { resolve, reject, id } = yield take(FETCH_ACCOUNT_REQUEST);
    const { response, error } = yield call(api.fetchAccount, id, localStorage.getItem('authToken'));

    if (response && !error) {
      resolve();
      let normalizedAccounts = [];
      if (Object.keys(response.body).length > 0) {
        normalizedAccounts = normalizeAccounts(response.body.account);
      }
      yield put(fetchAccountSuccess(normalizedAccounts[0]));
    } else {
      reject();
      yield put(fetchAccountFailure(error));
    }
  }
}

export function* createAccount() {
  while (true) {
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
      yield put(push('/accounts'));
    } else {
      reject();
      yield put(createAccountFailure(error));
    }
  }
}

export function* updateAccount() {
  while (true) {
    const { values, resolve, reject } = yield take(UPDATE_ACCOUNT_REQUEST);
    const { response, error } = yield call(
      api.updateAccount,
      values.account_id,
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
      yield put(updateAccountSuccess(normalizedAccounts[0]));
      yield put(push(`/accounts/${values.account_id}`));
    } else {
      reject();
      yield put(updateAccountFailure(error));
    }
  }
}

export function* deleteAccount() {
  while (true) {
    const { id, resolve, reject } = yield take(DELETE_ACCOUNT_REQUEST);
    const { response, error } = yield call(api.deleteAccount, id, localStorage.getItem('authToken'));

    if (response === undefined) {
      resolve();
      yield put(deleteAccountSuccess());
      yield put(fetchAccountsRequest(resolve, reject));
    } else {
      reject();
      yield put(deleteAccountFailure(error));
    }
  }
}
