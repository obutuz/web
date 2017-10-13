/* eslint arrow-body-style: 0 */

import { fork } from 'redux-saga/effects';

import fetchAccounts from './accounts';
import signInUser from './authentication';

export default function* rootSaga() {
  yield fork(fetchAccounts);
  yield fork(signInUser);
}
