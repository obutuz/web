import { call, put, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { api } from '../services';

import {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_UP_REQUEST,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
} from '../actions/authentication';

export function* signInUser() {
  while (true) {
    const { values, resolve, reject } = yield take(SIGN_IN_REQUEST);
    const { response, error } = yield call(api.signInUser, values.email, values.password);
    if (response && !error) {
      resolve();
      const authorizationHeader = response.headers.get('Authorization');
      localStorage.setItem('authToken', authorizationHeader);
      yield put(signInSuccess(authorizationHeader));
      yield put(push('/'));
    } else {
      reject();
      yield put(signInFailure(error));
    }
  }
}

export function* signOutUser() {
  while (true) {
    const { resolve } = yield take(SIGN_OUT_REQUEST);
    yield call(api.signOutUser, localStorage.getItem('authToken'));

    resolve();
    localStorage.removeItem('authToken');
    yield put(signOutSuccess());
  }
}

export function* signUpUser() {
  while (true) {
    const { values, resolve, reject } = yield take(SIGN_UP_REQUEST);
    const { response, error } = yield call(api.signUpUser, values.email, values.password);
    if (response && !error) {
      resolve();
      localStorage.setItem('authToken', response.access_token);
      yield put(signUpSuccess(response));
    } else {
      reject();
      yield put(signUpFailure(error));
    }
  }
}
