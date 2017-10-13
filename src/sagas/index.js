/* eslint arrow-body-style: 0 */

import { fork } from 'redux-saga/effects';

import fetchAccounts from './accounts';

export default function* rootSaga() {
  yield fork(fetchAccounts);
}
