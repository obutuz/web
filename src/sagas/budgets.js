import { call, put, take } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { api } from '../services';

import {
  FETCH_BUDGETS_REQUEST,
  fetchBudgetsRequest,
  fetchBudgetsSuccess,
  fetchBudgetsFailure,
  FETCH_BUDGET_REQUEST,
  fetchBudgetSuccess,
  fetchBudgetFailure,
  CREATE_BUDGET_REQUEST,
  createBudgetSuccess,
  createBudgetFailure,
  UPDATE_BUDGET_REQUEST,
  updateBudgetSuccess,
  updateBudgetFailure,
  DELETE_BUDGET_REQUEST,
  deleteBudgetSuccess,
  deleteBudgetFailure,
  SWITCH_BUDGET_REQUEST,
  switchBudgetSuccess,
  switchBudgetFailure,
} from '../actions/budgets';

const normalizeBudgets = (collection) => {
  return Object.entries(collection).map(budgets => ({
    id: budgets[1].id,
    name: budgets[1].attributes.name,
    description: budgets[1].attributes.description,
  }));
};

export function* fetchBudgets() {
  while (true) {
    const { resolve, reject } = yield take(FETCH_BUDGETS_REQUEST);
    const { response, error } = yield call(api.fetchBudgets, localStorage.getItem('authToken'));

    if (response && !error) {
      resolve();
      let normalizedBudgets = [];
      if (Object.keys(response.body).length > 0) {
        normalizedBudgets = normalizeBudgets(response.body.budget);
      }
      yield put(fetchBudgetsSuccess(normalizedBudgets));
    } else {
      reject();
      yield put(fetchBudgetsFailure(error));
    }
  }
}

export function* fetchBudget() {
  while (true) {
    const { id, resolve, reject } = yield take(FETCH_BUDGET_REQUEST);
    const { response, error } = yield call(api.fetchBudget, id, localStorage.getItem('authToken'));

    if (response && !error) {
      resolve();
      let normalizedBudgets = [];
      if (Object.keys(response.body).length > 0) {
        normalizedBudgets = normalizeBudgets(response.body.budget);
      }
      yield put(fetchBudgetSuccess(normalizedBudgets[0]));
    } else {
      reject();
      yield put(fetchBudgetFailure(error));
    }
  }
}

export function* createBudget() {
  while (true) {
    const { values, resolve, reject } = yield take(CREATE_BUDGET_REQUEST);
    const { response, error } = yield call(
      api.createBudget,
      values.budget_name,
      values.budget_description,
      localStorage.getItem('authToken'),
    );

    if (response && !error) {
      resolve();
      let normalizedBudgets = [];
      if (Object.keys(response.body).length > 0) {
        normalizedBudgets = normalizeBudgets(response.body.budget);
      }
      yield put(createBudgetSuccess(normalizedBudgets[0]));
      yield put(push('/budgets'));
    } else {
      reject();
      yield put(createBudgetFailure(error));
    }
  }
}

export function* updateBudget() {
  while (true) {
    const { values, resolve, reject } = yield take(UPDATE_BUDGET_REQUEST);
    const { response, error } = yield call(
      api.updateBudget,
      values.budget_id,
      values.budget_name,
      values.budget_description,
      localStorage.getItem('authToken'),
    );

    if (response && !error) {
      resolve();
      let normalizedBudgets = [];
      if (Object.keys(response.body).length > 0) {
        normalizedBudgets = normalizeBudgets(response.body.budget);
      }
      yield put(updateBudgetSuccess(normalizedBudgets[0]));
      yield put(push(`/budgets/${values.budget_id}`));
    } else {
      reject();
      yield put(updateBudgetFailure(error));
    }
  }
}

export function* deleteBudget() {
  while (true) {
    const { id, resolve, reject } = yield take(DELETE_BUDGET_REQUEST);
    const { response, error } = yield call(api.deleteBudget, id, localStorage.getItem('authToken'));

    if (response === undefined) {
      resolve();
      yield put(deleteBudgetSuccess());
      yield put(fetchBudgetsRequest(resolve, reject));
    } else {
      reject();
      yield put(deleteBudgetFailure(error));
    }
  }
}

export function* switchBudget() {
  while (true) {
    const { id, resolve, reject } = yield take(SWITCH_BUDGET_REQUEST);
    const { response, error } = yield call(api.switchBudget, id, localStorage.getItem('authToken'));

    if (response && !error) {
      resolve();
      yield put(switchBudgetSuccess());
      yield put(fetchBudgetsRequest(resolve, reject));
    } else {
      reject();
      yield put(switchBudgetFailure(error));
    }
  }
}
