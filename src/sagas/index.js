import { fork } from 'redux-saga/effects';

import { fetchAccounts, createAccount } from './accounts';
import { signInUser, signOutUser, signUpUser } from './authentication';

export default function* rootSaga() {
  yield fork(fetchAccounts);
  yield fork(createAccount);
  yield fork(signInUser);
  yield fork(signOutUser);
  yield fork(signUpUser);
}
