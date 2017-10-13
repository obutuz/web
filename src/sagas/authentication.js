import { call, put, take } from 'redux-saga/effects';

import { api } from '../services';

import {
  SIGN_IN_REQUEST,
  signInSuccess,
  signInFailure,
} from '../actions/authentication';

function* signInUser() {
  const { values, resolve, reject } = yield take(SIGN_IN_REQUEST);
  const { response, error } = yield call(api.signInUser, values.email, values.password);
  if (response && !error) {
    resolve();
    yield put(signInSuccess(response));
  } else {
    reject();
    yield put(signInFailure(error));
  }
}

export default signInUser;
