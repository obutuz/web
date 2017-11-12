export const FETCH_BUDGETS_REQUEST = 'FETCH_BUDGETS_REQUEST';
export const FETCH_BUDGETS_SUCCESS = 'FETCH_BUDGETS_SUCCESS';
export const FETCH_BUDGETS_FAILURE = 'FETCH_BUDGETS_FAILURE';

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
