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
    yield put({ type: FETCH_ACCOUNTS_SUCCESS, accounts: apiCall.response.account });
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
