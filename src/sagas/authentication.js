import { call, put, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { api } from '../services';

import {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_UP_REQUEST,
  USER_AUTHENTICATION_CHECK_REQUEST,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  userAuthenticationCheckSuccess,
  userAuthenticationCheckFailure,
} from '../actions/authentication';

import { switchBudgetSuccess } from '../actions/budgets';

export function* signInUser() {
  while (true) {
    const { values, resolve, reject } = yield take(SIGN_IN_REQUEST);
    const { response, error } = yield call(api.signInUser, values.email, values.password);
    if (response && !error) {
      resolve();
      const authorizationHeader = response.headers.get('Authorization');
      const defaultBudgetId = Object.entries(response.body.budget)[0][1].id;
      localStorage.setItem('authToken', authorizationHeader);
      localStorage.setItem('defaultBudgetId', defaultBudgetId);
      yield put(signInSuccess(authorizationHeader));
      yield put(switchBudgetSuccess(defaultBudgetId));
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
    yield put(push('/'));
  }
}

export function* signUpUser() {
  while (true) {
    const { values, resolve, reject } = yield take(SIGN_UP_REQUEST);
    const { response, error } = yield call(api.signUpUser, values.email, values.password);
    if (response && !error) {
      resolve();
      const authorizationHeader = response.headers.get('Authorization');
      localStorage.setItem('authToken', authorizationHeader);
      yield put(signUpSuccess(response));
      yield put(push('/'));
    } else {
      reject();
      yield put(signUpFailure(error));
    }
  }
}

export function* requireAuthentication() {
  while (true) {
    const { isAuthenticated, resolve, reject } = yield take(USER_AUTHENTICATION_CHECK_REQUEST);
    if (isAuthenticated) {
      resolve();
      yield put(userAuthenticationCheckSuccess());
    } else {
      reject();
      yield put(userAuthenticationCheckFailure());
      yield put(push('/sign_in'));
    }
  }
}
