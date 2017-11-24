import * as accounts from './accounts';

describe('fetchAccountsRequest', () => {
  it('returns the correct response', () => {
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: accounts.FETCH_ACCOUNTS_REQUEST,
      resolve,
      reject,
    };

    expect(accounts.fetchAccountsRequest(resolve, reject)).toEqual(expectedAction);
  });
});

describe('fetchAccountsSuccess', () => {
  it('returns the correct response', () => {
    const accountRecords = [
      {
        id: '1',
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      },
      {
        id: '2',
        name: 'Sample Account 2',
        description: 'This is a sample account',
        category: 'savings',
      },
    ];
    const expectedAction = {
      type: accounts.FETCH_ACCOUNTS_SUCCESS,
      accounts: accountRecords,
    };

    expect(accounts.fetchAccountsSuccess(accountRecords)).toEqual(expectedAction);
  });
});

describe('fetchAccountsFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: accounts.FETCH_ACCOUNTS_FAILURE,
      message: 'You failed!',
    };

    expect(accounts.fetchAccountsFailure(error)).toEqual(expectedAction);
  });
});

describe('fetchAccountRequest', () => {
  it('returns the correct response', () => {
    const id = '1';
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: accounts.FETCH_ACCOUNT_REQUEST,
      resolve,
      reject,
      id: '1',
    };

    expect(accounts.fetchAccountRequest(resolve, reject, id)).toEqual(expectedAction);
  });
});

describe('fetchAccountSuccess', () => {
  it('returns the correct response', () => {
    const account = {
      id: '1',
      name: 'Sample Account',
      description: 'This is a sample account',
      category: 'cash',
    };
    const expectedAction = {
      type: accounts.FETCH_ACCOUNT_SUCCESS,
      account,
    };

    expect(accounts.fetchAccountSuccess(account)).toEqual(expectedAction);
  });
});

describe('fetchAccountFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: accounts.FETCH_ACCOUNT_FAILURE,
      message: 'You failed!',
    };

    expect(accounts.fetchAccountFailure(error)).toEqual(expectedAction);
  });
});

describe('createAccountRequest', () => {
  it('returns the correct response', () => {
    const values = {
      name: 'Sample Account',
      description: 'This is a sample account',
      category: 'cash',
    };
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: accounts.CREATE_ACCOUNT_REQUEST,
      values,
      resolve,
      reject,
    };

    expect(accounts.createAccountRequest(values, resolve, reject)).toEqual(expectedAction);
  });
});

describe('createAccountSuccess', () => {
  it('returns the correct response', () => {
    const account = {
      id: '1',
      name: 'Sample Account',
      description: 'This is a sample account',
      category: 'cash',
    };
    const expectedAction = {
      type: accounts.CREATE_ACCOUNT_SUCCESS,
      account,
    };

    expect(accounts.createAccountSuccess(account)).toEqual(expectedAction);
  });
});

describe('createAccountFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: accounts.CREATE_ACCOUNT_FAILURE,
      message: 'You failed!',
    };

    expect(accounts.createAccountFailure(error)).toEqual(expectedAction);
  });
});

describe('updateAccountRequest', () => {
  it('returns the correct response', () => {
    const values = {
      name: 'Updated Sample Account',
      description: 'This is an updated sample account',
      category: 'cash',
    };
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: accounts.UPDATE_ACCOUNT_REQUEST,
      values,
      resolve,
      reject,
    };

    expect(accounts.updateAccountRequest(values, resolve, reject)).toEqual(expectedAction);
  });
});

describe('updateAccountSuccess', () => {
  it('returns the correct response', () => {
    const account = {
      id: '1',
      name: 'Updated Sample Account',
      description: 'This is an updated sample account',
      category: 'cash',
    };
    const expectedAction = {
      type: accounts.UPDATE_ACCOUNT_SUCCESS,
      account,
    };

    expect(accounts.updateAccountSuccess(account)).toEqual(expectedAction);
  });
});

describe('updateAccountFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: accounts.UPDATE_ACCOUNT_FAILURE,
      message: 'You failed!',
    };

    expect(accounts.updateAccountFailure(error)).toEqual(expectedAction);
  });
});

describe('deleteAccountRequest', () => {
  it('returns the correct response', () => {
    const id = '1';
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: accounts.DELETE_ACCOUNT_REQUEST,
      id,
      resolve,
      reject,
    };

    expect(accounts.deleteAccountRequest(id, resolve, reject)).toEqual(expectedAction);
  });
});

describe('deleteAccountSuccess', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: accounts.DELETE_ACCOUNT_SUCCESS,
    };

    expect(accounts.deleteAccountSuccess()).toEqual(expectedAction);
  });
});

describe('deleteAccountFailure', () => {
  it('returns the correct response', () => {
    const error = { message: 'You failed!' };
    const expectedAction = {
      type: accounts.DELETE_ACCOUNT_FAILURE,
      message: 'You failed!',
    };

    expect(accounts.deleteAccountFailure(error)).toEqual(expectedAction);
  });
});
