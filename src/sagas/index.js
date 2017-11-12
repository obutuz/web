import { fork } from 'redux-saga/effects';

import { fetchAccounts, createAccount } from './accounts';
import { signInUser, signOutUser, signUpUser } from './authentication';
import fetchBudgets from './budgets';

export default function* rootSaga() {
  yield fork(fetchAccounts);
  yield fork(createAccount);
  yield fork(fetchBudgets);
  yield fork(signInUser);
  yield fork(signOutUser);
  yield fork(signUpUser);
}
