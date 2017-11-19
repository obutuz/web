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
