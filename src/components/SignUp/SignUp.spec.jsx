import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

describe('<SignIn />', () => {
  let props;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
      isAuthenticated: false,
    };
  });

  it('renders component successfully', () => {
    shallow(<SignUp {...props} />);
  });
});
