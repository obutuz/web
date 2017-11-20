import reducer from './budgets';

import * as budgets from '../actions/budgets';

describe('Budget reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      budgetsList: [],
      activeBudget: {
        id: '',
        name: '',
        description: '',
      },
      isFetching: false,
      success: false,
      message: null,
      defaultBudgetId: null,
    });
  });

  it('handles FETCH_BUDGETS_REQUEST', () => {
    expect(reducer([], {
      type: budgets.FETCH_BUDGETS_REQUEST,
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      budgetsList: [],
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles FETCH_BUDGETS_SUCCESS', () => {
    expect(reducer([], {
      type: budgets.FETCH_BUDGETS_SUCCESS,
      budgets: [{
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      }],
    })).toEqual({
      budgetsList: [{
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      }],
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles FETCH_BUDGETS_FAILURE', () => {
    expect(reducer([], {
      type: budgets.FETCH_BUDGETS_FAILURE,
      message: 'Budget fetch failed!',
    })).toEqual({
      budgetsList: [],
      isFetching: false,
      success: false,
      message: 'Budget fetch failed!',
    });
  });

  it('handles FETCH_BUDGET_REQUEST', () => {
    expect(reducer([], {
      type: budgets.FETCH_BUDGET_REQUEST,
      id: 1,
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      activeBudget: {
        id: '',
        name: '',
        description: '',
      },
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles FETCH_BUDGET_SUCCESS', () => {
    expect(reducer([], {
      type: budgets.FETCH_BUDGET_SUCCESS,
      budget: {
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      },
    })).toEqual({
      activeBudget: {
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      },
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles FETCH_BUDGET_FAILURE', () => {
    expect(reducer([], {
      type: budgets.FETCH_BUDGET_FAILURE,
      message: 'Budget fetch failed!',
    })).toEqual({
      activeBudget: {
        id: '',
        name: '',
        description: '',
      },
      isFetching: false,
      success: false,
      message: 'Budget fetch failed!',
    });
  });

  it('handles CREATE_BUDGET_REQUEST', () => {
    expect(reducer([], {
      type: budgets.CREATE_BUDGET_REQUEST,
      values: {
        name: 'Sample Budget',
        description: 'This is a sample budget',
      },
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      activeBudget: null,
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles CREATE_BUDGET_SUCCESS', () => {
    expect(reducer([], {
      type: budgets.CREATE_BUDGET_SUCCESS,
      budget: {
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      },
    })).toEqual({
      activeBudget: {
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      },
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles CREATE_BUDGET_FAILURE', () => {
    expect(reducer([], {
      type: budgets.CREATE_BUDGET_FAILURE,
      message: 'Create budget failed!',
    })).toEqual({
      activeBudget: null,
      isFetching: false,
      success: false,
      message: 'Create budget failed!',
    });
  });

  it('handles UPDATE_BUDGET_REQUEST', () => {
    expect(reducer([], {
      type: budgets.UPDATE_BUDGET_REQUEST,
      values: {
        id: '1',
        name: 'Updated Sample Budget',
        description: 'This is an updated sample budget',
      },
    })).toEqual({
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles UPDATE_BUDGET_SUCCESS', () => {
    expect(reducer([], {
      type: budgets.UPDATE_BUDGET_SUCCESS,
      budget: {
        id: '1',
        name: 'Updated Sample Budget',
        description: 'This is an updated sample budget',
      },
    })).toEqual({
      activeBudget: {
        id: '1',
        name: 'Updated Sample Budget',
        description: 'This is an updated sample budget',
      },
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles UPDATE_BUDGET_FAILURE', () => {
    expect(reducer([], {
      type: budgets.UPDATE_BUDGET_FAILURE,
      message: 'Update budget failed!',
    })).toEqual({
      isFetching: false,
      success: false,
      message: 'Update budget failed!',
    });
  });

  it('handles DELETE_BUDGET_REQUEST', () => {
    expect(reducer([], {
      type: budgets.DELETE_BUDGET_REQUEST,
      id: '1',
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles DELETE_BUDGET_SUCCESS', () => {
    expect(reducer([], {
      type: budgets.DELETE_BUDGET_SUCCESS,
    })).toEqual({
      activeBudget: null,
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles DELETE_BUDGET_FAILURE', () => {
    expect(reducer([], {
      type: budgets.DELETE_BUDGET_FAILURE,
      message: 'Delete budget failed!',
    })).toEqual({
      isFetching: false,
      success: false,
      message: 'Delete budget failed!',
    });
  });
});
