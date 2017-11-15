export const FETCH_BUDGETS_REQUEST = 'FETCH_BUDGETS_REQUEST';
export const FETCH_BUDGETS_SUCCESS = 'FETCH_BUDGETS_SUCCESS';
export const FETCH_BUDGETS_FAILURE = 'FETCH_BUDGETS_FAILURE';
export const FETCH_BUDGET_REQUEST = 'FETCH_BUDGET_REQUEST';
export const FETCH_BUDGET_SUCCESS = 'FETCH_BUDGET_SUCCESS';
export const FETCH_BUDGET_FAILURE = 'FETCH_BUDGET_FAILURE';
export const CREATE_BUDGET_REQUEST = 'CREATE_BUDGET_REQUEST';
export const CREATE_BUDGET_SUCCESS = 'CREATE_BUDGET_SUCCESS';
export const CREATE_BUDGET_FAILURE = 'CREATE_BUDGET_FAILURE';
export const UPDATE_BUDGET_REQUEST = 'UPDATE_BUDGET_REQUEST';
export const UPDATE_BUDGET_SUCCESS = 'UPDATE_BUDGET_SUCCESS';
export const UPDATE_BUDGET_FAILURE = 'UPDATE_BUDGET_FAILURE';
export const DELETE_BUDGET_REQUEST = 'DELETE_BUDGET_REQUEST';
export const DELETE_BUDGET_SUCCESS = 'DELETE_BUDGET_SUCCESS';
export const DELETE_BUDGET_FAILURE = 'DELETE_BUDGET_FAILURE';

export const fetchBudgetsRequest = (resolve, reject) => ({
  type: FETCH_BUDGETS_REQUEST,
  resolve,
  reject,
});

export const fetchBudgetsSuccess = budgets => ({
  type: FETCH_BUDGETS_SUCCESS,
  budgets,
});

export const fetchBudgetsFailure = error => ({
  type: FETCH_BUDGETS_FAILURE,
  message: error.message,
});

export const fetchBudgetRequest = (id, resolve, reject) => ({
  type: FETCH_BUDGET_REQUEST,
  id,
  resolve,
  reject,
});

export const fetchBudgetSuccess = budget => ({
  type: FETCH_BUDGET_SUCCESS,
  budget,
});

export const fetchBudgetFailure = error => ({
  type: FETCH_BUDGET_FAILURE,
  message: error.message,
});

export const createBudgetRequest = (values, resolve, reject) => ({
  type: CREATE_BUDGET_REQUEST,
  values,
  resolve,
  reject,
});

export const createBudgetSuccess = budget => ({
  type: CREATE_BUDGET_SUCCESS,
  budget,
});

export const createBudgetFailure = error => ({
  type: CREATE_BUDGET_FAILURE,
  message: error.message,
});

export const updateBudgetRequest = (values, resolve, reject) => ({
  type: UPDATE_BUDGET_REQUEST,
  values,
  resolve,
  reject,
});

export const updateBudgetSuccess = budget => ({
  type: UPDATE_BUDGET_SUCCESS,
  budget,
});

export const updateBudgetFailure = error => ({
  type: UPDATE_BUDGET_FAILURE,
  message: error.message,
});

export const deleteBudgetRequest = (id, resolve, reject) => ({
  type: DELETE_BUDGET_REQUEST,
  id,
  resolve,
  reject,
});

export const deleteBudgetSuccess = () => ({
  type: DELETE_BUDGET_SUCCESS,
});

export const deleteBudgetFailure = error => ({
  type: DELETE_BUDGET_FAILURE,
  message: error.message,
});
