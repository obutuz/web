import {
  FETCH_BUDGETS_REQUEST,
  FETCH_BUDGETS_SUCCESS,
  FETCH_BUDGETS_FAILURE,
  FETCH_BUDGET_REQUEST,
  FETCH_BUDGET_SUCCESS,
  FETCH_BUDGET_FAILURE,
  CREATE_BUDGET_REQUEST,
  CREATE_BUDGET_SUCCESS,
  CREATE_BUDGET_FAILURE,
} from '../actions/budgets';

const initialState = {
  budgetsList: [],
  activeBudget: {
    id: '',
    name: '',
    description: '',
  },
  isFetching: false,
  success: false,
  message: null,
};

const budgets = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case FETCH_BUDGETS_REQUEST:
      return {
        ...state,
        budgetsList: [],
        isFetching: true,
        success: false,
        message: null,
      };
    case FETCH_BUDGETS_SUCCESS:
      return {
        ...state,
        budgetsList: payload.budgets,
        isFetching: false,
        success: true,
        message: null,
      };
    case FETCH_BUDGETS_FAILURE:
      return {
        ...state,
        budgetsList: [],
        isFetching: false,
        success: false,
        message: payload.message,
      };
    case FETCH_BUDGET_REQUEST:
      return {
        ...state,
        activeBudget: initialState.activeBudget,
        isFetching: true,
        success: false,
        message: null,
      };
    case FETCH_BUDGET_SUCCESS:
      return {
        ...state,
        activeBudget: payload.budget,
        isFetching: false,
        success: true,
        message: null,
      };
    case FETCH_BUDGET_FAILURE:
      return {
        ...state,
        activeBudget: initialState.activeBudget,
        isFetching: false,
        success: false,
        message: payload.message,
      };
    case CREATE_BUDGET_REQUEST:
      return {
        ...state,
        activeBudget: null,
        isFetching: true,
        success: false,
        message: null,
      };
    case CREATE_BUDGET_SUCCESS:
      return {
        ...state,
        activeBudget: payload.budget,
        isFetching: false,
        success: true,
        message: null,
      };
    case CREATE_BUDGET_FAILURE:
      return {
        ...state,
        activeBudget: null,
        isFetching: false,
        success: false,
        message: payload.message,
      };
    default:
      return state;
  }
};

export default budgets;
