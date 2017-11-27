import * as authentication from './authentication';

describe('signInRequest', () => {
  it('returns the correct response', () => {
    const values = {
      email: 'test@example.com',
      password: 'password',
    };
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: authentication.SIGN_IN_REQUEST,
      values,
      resolve,
      reject,
    };

    expect(authentication.signInRequest(values, resolve, reject)).toEqual(expectedAction);
  });
});

describe('signInSuccess', () => {
  it('returns the correct response', () => {
    const authToken = 'Bearer abcd1234';
    const expectedAction = {
      type: authentication.SIGN_IN_SUCCESS,
      authToken,
    };

    expect(authentication.signInSuccess(authToken)).toEqual(expectedAction);
  });
});

describe('signInFailure', () => {
  it('returns the correct response', () => {
    const error = {
      message: 'You failed!',
    };
    const expectedAction = {
      type: authentication.SIGN_IN_FAILURE,
      message: error.message,
    };

    expect(authentication.signInFailure(error)).toEqual(expectedAction);
  });
});

describe('signOutRequest', () => {
  it('returns the correct response', () => {
    const resolve = jest.fn();
    const expectedAction = {
      type: authentication.SIGN_OUT_REQUEST,
      resolve,
    };

    expect(authentication.signOutRequest(resolve)).toEqual(expectedAction);
  });
});

describe('signOutSuccess', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: authentication.SIGN_OUT_SUCCESS,
    };

    expect(authentication.signOutSuccess()).toEqual(expectedAction);
  });
});

describe('signOutFailure', () => {
  it('returns the correct response', () => {
    const error = {
      message: 'You failed!',
    };
    const expectedAction = {
      type: authentication.SIGN_OUT_FAILURE,
      message: error.message,
    };

    expect(authentication.signOutFailure(error)).toEqual(expectedAction);
  });
});

describe('signUpRequest', () => {
  it('returns the correct response', () => {
    const values = {
      email: 'test@example.com',
      password: 'password',
    };
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: authentication.SIGN_UP_REQUEST,
      values,
      resolve,
      reject,
    };

    expect(authentication.signUpRequest(values, resolve, reject)).toEqual(expectedAction);
  });
});

describe('signUpSuccess', () => {
  it('returns the correct response', () => {
    const authToken = 'Bearer abcd1234';
    const expectedAction = {
      type: authentication.SIGN_UP_SUCCESS,
      authToken,
    };

    expect(authentication.signUpSuccess(authToken)).toEqual(expectedAction);
  });
});

describe('signUpFailure', () => {
  it('returns the correct response', () => {
    const error = {
      message: 'You failed!',
    };
    const expectedAction = {
      type: authentication.SIGN_UP_FAILURE,
      message: error.message,
    };

    expect(authentication.signUpFailure(error)).toEqual(expectedAction);
  });
});

describe('userAuthenticationCheckRequest', () => {
  it('returns the correct response', () => {
    const isAuthenticated = false;
    const resolve = jest.fn();
    const reject = jest.fn();
    const expectedAction = {
      type: authentication.USER_AUTHENTICATION_CHECK_REQUEST,
      isAuthenticated,
      resolve,
      reject,
    };

    expect(authentication.userAuthenticationCheckRequest(isAuthenticated, resolve, reject))
      .toEqual(expectedAction);
  });
});

describe('userAuthenticationCheckSuccess', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: authentication.USER_AUTHENTICATION_CHECK_SUCCESS,
    };

    expect(authentication.userAuthenticationCheckSuccess()).toEqual(expectedAction);
  });
});

describe('userAuthenticationCheckFailure', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: authentication.USER_AUTHENTICATION_CHECK_FAILURE,
    };

    expect(authentication.userAuthenticationCheckFailure()).toEqual(expectedAction);
  });
});
