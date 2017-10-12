/* eslint arrow-body-style: 0 */

import { all } from 'redux-saga/effects';

import watchFetchAccounts from './accounts';

export default function* rootSaga() {
  yield all([
    watchFetchAccounts(),
  ]);
}
