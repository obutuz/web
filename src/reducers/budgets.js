import {
  FETCH_BUDGETS_REQUEST,
  FETCH_BUDGETS_SUCCESS,
  FETCH_BUDGETS_FAILURE,
} from '../actions/budgets';

const initialState = {
  budgets: [],
  isFetching: false,
  success: false,
  message: null,
};

const budgets = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case FETCH_BUDGETS_REQUEST:
      return {
        ...state,
        budgets: [],
        isFetching: true,
        success: false,
        message: null,
      };
    case FETCH_BUDGETS_SUCCESS:
      return {
        ...state,
        budgets: payload.budgets,
        isFetching: false,
        success: true,
        message: null,
      };
    case FETCH_BUDGETS_FAILURE:
      return {
        ...state,
        budgets: [],
        isFetching: false,
        success: false,
        message: payload.message,
      };
    default:
      return state;
  }
};

export default budgets;
