import { call, put, take } from 'redux-saga/effects';

import { api } from '../services';

import {
  FETCH_ACCOUNTS_REQUEST,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} from '../actions/accounts';

function* fetchAccounts() {
  const { resolve, reject } = yield take(FETCH_ACCOUNTS_REQUEST);
  const { response, error } = yield call(api.fetchAccounts);

  if (response && !error) {
    resolve();
    const normalizedAccounts = Object.entries(response.account).map((account) => {
      return {
        id: account[1].id,
        name: account[1].attributes.name,
        description: account[1].attributes.description,
        category: account[1].attributes.category,
      };
    });
    yield put(fetchAccountsSuccess(normalizedAccounts));
  } else {
    reject();
    yield put(fetchAccountsFailure(error));
  }
}

export default fetchAccounts;
