import React from 'react';
import { SignIn } from './SignIn';
import shallowWithContext from '../../testUtils';

describe('<SignIn />', () => {
  let MockObject;
  let props;

  beforeEach(() => {
    MockObject = jest.fn();
    props = {
      classes: new MockObject(),
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
      isAuthenticated: false,
    };
  });

  it('renders component successfully', () => {
    shallowWithContext(<SignIn {...props} />);
  });
});
