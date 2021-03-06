import { fork } from 'redux-saga/effects';

import {
  fetchAccounts,
  fetchAccount,
  createAccount,
  updateAccount,
  deleteAccount,
} from './accounts';
import { signInUser, signOutUser, signUpUser, requireAuthentication } from './authentication';
import {
  fetchBudgets,
  fetchBudget,
  createBudget,
  updateBudget,
  deleteBudget,
  switchBudget,
} from './budgets';

export default function* rootSaga() {
  yield fork(fetchAccounts);
  yield fork(fetchAccount);
  yield fork(createAccount);
  yield fork(updateAccount);
  yield fork(deleteAccount);
  yield fork(fetchBudgets);
  yield fork(fetchBudget);
  yield fork(createBudget);
  yield fork(updateBudget);
  yield fork(deleteBudget);
  yield fork(switchBudget);
  yield fork(signInUser);
  yield fork(signOutUser);
  yield fork(signUpUser);
  yield fork(requireAuthentication);
}
