import * as budgets from './budgets';

describe('fetchBudgetsRequest', () => {
  it('returns the correct response', () => {
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: budgets.FETCH_BUDGETS_REQUEST,
      resolve,
      reject,
    };

    expect(budgets.fetchBudgetsRequest(resolve, reject)).toEqual(expectedAction);
  });
});

describe('fetchBudgetsSuccess', () => {
  it('returns the correct response', () => {
    const budgetRecords = [
      {
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      },
      {
        id: '2',
        name: 'Sample Budget 2',
        description: 'This is a sample budget',
      },
    ];
    const expectedAction = {
      type: budgets.FETCH_BUDGETS_SUCCESS,
      budgets: budgetRecords,
    };

    expect(budgets.fetchBudgetsSuccess(budgetRecords)).toEqual(expectedAction);
  });
});

describe('fetchBudgetsFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: budgets.FETCH_BUDGETS_FAILURE,
      message: 'You failed!',
    };

    expect(budgets.fetchBudgetsFailure(error)).toEqual(expectedAction);
  });
});

describe('fetchBudgetRequest', () => {
  it('returns the correct response', () => {
    const id = '1';
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: budgets.FETCH_BUDGET_REQUEST,
      resolve,
      reject,
      id: '1',
    };

    expect(budgets.fetchBudgetRequest(id, resolve, reject)).toEqual(expectedAction);
  });
});

describe('fetchBudgetSuccess', () => {
  it('returns the correct response', () => {
    const budget = {
      id: '1',
      name: 'Sample Budget',
      description: 'This is a sample budget',
    };
    const expectedAction = {
      type: budgets.FETCH_BUDGET_SUCCESS,
      budget,
    };

    expect(budgets.fetchBudgetSuccess(budget)).toEqual(expectedAction);
  });
});

describe('fetchBudgetFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: budgets.FETCH_BUDGET_FAILURE,
      message: 'You failed!',
    };

    expect(budgets.fetchBudgetFailure(error)).toEqual(expectedAction);
  });
});

describe('createBudgetRequest', () => {
  it('returns the correct response', () => {
    const values = {
      name: 'Sample Budget',
      description: 'This is a sample budget',
    };
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: budgets.CREATE_BUDGET_REQUEST,
      values,
      resolve,
      reject,
    };

    expect(budgets.createBudgetRequest(values, resolve, reject)).toEqual(expectedAction);
  });
});

describe('createBudgetSuccess', () => {
  it('returns the correct response', () => {
    const budget = {
      id: '1',
      name: 'Sample Budget',
      description: 'This is a sample budget',
    };
    const expectedAction = {
      type: budgets.CREATE_BUDGET_SUCCESS,
      budget,
    };

    expect(budgets.createBudgetSuccess(budget)).toEqual(expectedAction);
  });
});

describe('createBudgetFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: budgets.CREATE_BUDGET_FAILURE,
      message: 'You failed!',
    };

    expect(budgets.createBudgetFailure(error)).toEqual(expectedAction);
  });
});

describe('updateBudgetRequest', () => {
  it('returns the correct response', () => {
    const values = {
      name: 'Updated Sample Budget',
      description: 'This is an updated sample budget',
    };
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: budgets.UPDATE_BUDGET_REQUEST,
      values,
      resolve,
      reject,
    };

    expect(budgets.updateBudgetRequest(values, resolve, reject)).toEqual(expectedAction);
  });
});

describe('updateBudgetSuccess', () => {
  it('returns the correct response', () => {
    const budget = {
      id: '1',
      name: 'Updated Sample Budget',
      description: 'This is an updated sample budget',
    };
    const expectedAction = {
      type: budgets.UPDATE_BUDGET_SUCCESS,
      budget,
    };

    expect(budgets.updateBudgetSuccess(budget)).toEqual(expectedAction);
  });
});

describe('updateBudgetFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: budgets.UPDATE_BUDGET_FAILURE,
      message: 'You failed!',
    };

    expect(budgets.updateBudgetFailure(error)).toEqual(expectedAction);
  });
});

describe('deleteBudgetRequest', () => {
  it('returns the correct response', () => {
    const id = '1';
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: budgets.DELETE_BUDGET_REQUEST,
      id,
      resolve,
      reject,
    };

    expect(budgets.deleteBudgetRequest(id, resolve, reject)).toEqual(expectedAction);
  });
});

describe('deleteBudgetSuccess', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: budgets.DELETE_BUDGET_SUCCESS,
    };

    expect(budgets.deleteBudgetSuccess()).toEqual(expectedAction);
  });
});

describe('deleteBudgetFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: budgets.DELETE_BUDGET_FAILURE,
      message: 'You failed!',
    };

    expect(budgets.deleteBudgetFailure(error)).toEqual(expectedAction);
  });
});

describe('switchBudgetRequest', () => {
  it('returns the correct response', () => {
    const id = '1';
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: budgets.SWITCH_BUDGET_REQUEST,
      id,
      resolve,
      reject,
    };

    expect(budgets.switchBudgetRequest(id, resolve, reject)).toEqual(expectedAction);
  });
});

describe('switchBudgetSuccess', () => {
  it('returns the correct response', () => {
    const defaultBudgetId = '1';
    const expectedAction = {
      type: budgets.SWITCH_BUDGET_SUCCESS,
      defaultBudgetId,
    };

    expect(budgets.switchBudgetSuccess(defaultBudgetId)).toEqual(expectedAction);
  });
});

describe('switchBudgetFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: budgets.SWITCH_BUDGET_FAILURE,
      message: 'You failed!',
    };

    expect(budgets.switchBudgetFailure(error)).toEqual(expectedAction);
  });
});
