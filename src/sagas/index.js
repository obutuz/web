import { fork } from 'redux-saga/effects';

import {
  fetchAccounts,
  fetchAccount,
  createAccount,
  updateAccount,
  deleteAccount,
} from './accounts';
import { signInUser, signOutUser, signUpUser, requireAuthentication } from './authentication';
import fetchBudgets from './budgets';

export default function* rootSaga() {
  yield fork(fetchAccounts);
  yield fork(fetchAccount);
  yield fork(createAccount);
  yield fork(updateAccount);
  yield fork(deleteAccount);
  yield fork(fetchBudgets);
  yield fork(signInUser);
  yield fork(signOutUser);
  yield fork(signUpUser);
  yield fork(requireAuthentication);
}
