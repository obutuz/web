import { fork } from 'redux-saga/effects';

import fetchAccounts from './accounts';
import { signInUser, signOutUser } from './authentication';

export default function* rootSaga() {
  yield fork(fetchAccounts);
  yield fork(signInUser);
  yield fork(signOutUser);
}
