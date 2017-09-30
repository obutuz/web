/* eslint arrow-body-style: 0 */

import { call, put, takeEvery, all } from 'redux-saga/effects';

import { api } from '../services';

import {
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
} from '../actions/accounts';

function* fetchAccounts() {
  try {
    const apiCall = yield call(api.fetchAccounts);
    const normalizedAccounts = Object.entries(apiCall.response.account).map((account) => {
      return {
        id: account[1].id,
        name: account[1].attributes.name,
        description: account[1].attributes.description,
        category: account[1].attributes.category,
      };
    });

    yield put({ type: FETCH_ACCOUNTS_SUCCESS, accounts: normalizedAccounts });
  } catch (e) {
    yield put({ type: FETCH_ACCOUNTS_FAILURE, message: e.message });
  }
}

function* watchFetchAccounts() {
  yield takeEvery(FETCH_ACCOUNTS_REQUEST, fetchAccounts);
}

export default function* rootSaga() {
  yield all([
    watchFetchAccounts(),
  ]);
}
