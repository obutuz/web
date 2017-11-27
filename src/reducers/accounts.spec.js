import reducer from './accounts';

import * as accounts from '../actions/accounts';

describe('Account reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      accountsList: [],
      activeAccount: {
        id: '',
        name: '',
        description: '',
        category: '',
      },
      isFetching: false,
      success: false,
      message: null,
    });
  });

  it('handles FETCH_ACCOUNTS_REQUEST', () => {
    expect(reducer([], {
      type: accounts.FETCH_ACCOUNTS_REQUEST,
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      accountsList: [],
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles FETCH_ACCOUNTS_SUCCESS', () => {
    expect(reducer([], {
      type: accounts.FETCH_ACCOUNTS_SUCCESS,
      accounts: [{
        id: '1',
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      }],
    })).toEqual({
      accountsList: [{
        id: '1',
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      }],
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles FETCH_ACCOUNTS_FAILURE', () => {
    expect(reducer([], {
      type: accounts.FETCH_ACCOUNTS_FAILURE,
      message: 'Account fetch failed!',
    })).toEqual({
      accountsList: [],
      isFetching: false,
      success: false,
      message: 'Account fetch failed!',
    });
  });

  it('handles FETCH_ACCOUNT_REQUEST', () => {
    expect(reducer([], {
      type: accounts.FETCH_ACCOUNT_REQUEST,
      id: 1,
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      activeAccount: {
        id: '',
        name: '',
        description: '',
        category: '',
      },
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles FETCH_ACCOUNT_SUCCESS', () => {
    expect(reducer([], {
      type: accounts.FETCH_ACCOUNT_SUCCESS,
      account: {
        id: '1',
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      },
    })).toEqual({
      activeAccount: {
        id: '1',
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      },
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles FETCH_ACCOUNT_FAILURE', () => {
    expect(reducer([], {
      type: accounts.FETCH_ACCOUNT_FAILURE,
      message: 'Account fetch failed!',
    })).toEqual({
      activeAccount: {
        id: '',
        name: '',
        description: '',
        category: '',
      },
      isFetching: false,
      success: false,
      message: 'Account fetch failed!',
    });
  });

  it('handles CREATE_ACCOUNT_REQUEST', () => {
    expect(reducer([], {
      type: accounts.CREATE_ACCOUNT_REQUEST,
      values: {
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      },
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      activeAccount: null,
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles CREATE_ACCOUNT_SUCCESS', () => {
    expect(reducer([], {
      type: accounts.CREATE_ACCOUNT_SUCCESS,
      account: {
        id: '1',
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      },
    })).toEqual({
      activeAccount: {
        id: '1',
        name: 'Sample Account',
        description: 'This is a sample account',
        category: 'cash',
      },
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles CREATE_ACCOUNT_FAILURE', () => {
    expect(reducer([], {
      type: accounts.CREATE_ACCOUNT_FAILURE,
      message: 'Create account failed!',
    })).toEqual({
      activeAccount: null,
      isFetching: false,
      success: false,
      message: 'Create account failed!',
    });
  });

  it('handles UPDATE_ACCOUNT_REQUEST', () => {
    expect(reducer([], {
      type: accounts.UPDATE_ACCOUNT_REQUEST,
      values: {
        id: '1',
        name: 'Updated Sample Account',
        description: 'This is an updated sample account',
        category: 'cash',
      },
    })).toEqual({
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles UPDATE_ACCOUNT_SUCCESS', () => {
    expect(reducer([], {
      type: accounts.UPDATE_ACCOUNT_SUCCESS,
      account: {
        id: '1',
        name: 'Updated Sample Account',
        description: 'This is an updated sample account',
        category: 'cash',
      },
    })).toEqual({
      activeAccount: {
        id: '1',
        name: 'Updated Sample Account',
        description: 'This is an updated sample account',
        category: 'cash',
      },
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles UPDATE_ACCOUNT_FAILURE', () => {
    expect(reducer([], {
      type: accounts.UPDATE_ACCOUNT_FAILURE,
      message: 'Update account failed!',
    })).toEqual({
      isFetching: false,
      success: false,
      message: 'Update account failed!',
    });
  });

  it('handles DELETE_ACCOUNT_REQUEST', () => {
    expect(reducer([], {
      type: accounts.DELETE_ACCOUNT_REQUEST,
      id: '1',
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles DELETE_ACCOUNT_SUCCESS', () => {
    expect(reducer([], {
      type: accounts.DELETE_ACCOUNT_SUCCESS,
    })).toEqual({
      activeAccount: null,
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles DELETE_ACCOUNT_FAILURE', () => {
    expect(reducer([], {
      type: accounts.DELETE_ACCOUNT_FAILURE,
      message: 'Delete account failed!',
    })).toEqual({
      isFetching: false,
      success: false,
      message: 'Delete account failed!',
    });
  });
});
