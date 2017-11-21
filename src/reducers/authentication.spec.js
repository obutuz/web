import reducer from './authentication';

import * as authentication from '../actions/authentication';

describe('Authentication reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthenticated: false,
      isFetching: false,
      success: false,
      message: null,
      authToken: null,
    });
  });

  it('handles SIGN_IN_REQUEST', () => {
    expect(reducer([], {
      type: authentication.SIGN_IN_REQUEST,
      values: {
        email: 'hello@example.com',
        password: 'password',
      },
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      isAuthenticated: false,
      isFetching: true,
      success: false,
      message: null,
      authToken: null,
    });
  });

  it('handles SIGN_IN_SUCCESS', () => {
    expect(reducer([], {
      type: authentication.SIGN_IN_SUCCESS,
      authToken: 'Bearer abcd1234',
    })).toEqual({
      isAuthenticated: true,
      isFetching: false,
      success: true,
      message: null,
      authToken: 'Bearer abcd1234',
    });
  });

  it('handles SIGN_IN_FAILURE', () => {
    expect(reducer([], {
      type: authentication.SIGN_IN_FAILURE,
      message: 'Sign In failed!',
    })).toEqual({
      isAuthenticated: false,
      isFetching: false,
      success: false,
      message: 'Sign In failed!',
      authToken: null,
    });
  });

  it('handles SIGN_OUT_REQUEST', () => {
    expect(reducer([], {
      type: authentication.SIGN_OUT_REQUEST,
      resolve: jest.fn(),
    })).toEqual({
      isAuthenticated: true,
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles SIGN_OUT_SUCCESS', () => {
    expect(reducer([], {
      type: authentication.SIGN_OUT_SUCCESS,
    })).toEqual({
      isAuthenticated: false,
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles SIGN_OUT_FAILURE', () => {
    expect(reducer([], {
      type: authentication.SIGN_OUT_FAILURE,
      message: 'Sign Out failed!',
    })).toEqual({
      isAuthenticated: true,
      isFetching: false,
      success: false,
      message: 'Sign Out failed!',
    });
  });

  it('handles SIGN_UP_REQUEST', () => {
    expect(reducer([], {
      type: authentication.SIGN_UP_REQUEST,
      values: {
        email: 'hello@example.com',
        password: 'password',
      },
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      isAuthenticated: false,
      isFetching: true,
      success: false,
      message: null,
      authToken: null,
    });
  });

  it('handles SIGN_UP_SUCCESS', () => {
    expect(reducer([], {
      type: authentication.SIGN_UP_SUCCESS,
      authToken: 'Bearer abcd1234',
    })).toEqual({
      isAuthenticated: true,
      isFetching: false,
      success: true,
      message: null,
      authToken: 'Bearer abcd1234',
    });
  });

  it('handles SIGN_UP_FAILURE', () => {
    expect(reducer([], {
      type: authentication.SIGN_UP_FAILURE,
      message: 'Sign Up failed!',
    })).toEqual({
      isAuthenticated: false,
      isFetching: false,
      success: false,
      message: 'Sign Up failed!',
      authToken: null,
    });
  });

  it('handles USER_AUTHENTICATION_CHECK_REQUEST', () => {
    expect(reducer([], {
      type: authentication.USER_AUTHENTICATION_CHECK_REQUEST,
      isAuthenticated: false,
      resolve: jest.fn(),
      reject: jest.fn(),
    })).toEqual({
      isFetching: true,
      success: false,
      message: null,
    });
  });

  it('handles USER_AUTHENTICATION_CHECK_SUCCESS', () => {
    expect(reducer([], {
      type: authentication.USER_AUTHENTICATION_CHECK_SUCCESS,
    })).toEqual({
      isFetching: false,
      success: true,
      message: null,
    });
  });

  it('handles USER_AUTHENTICATION_CHECK_FAILURE', () => {
    expect(reducer([], {
      type: authentication.USER_AUTHENTICATION_CHECK_FAILURE,
    })).toEqual({
      isFetching: false,
      success: false,
      message: null,
    });
  });
});
