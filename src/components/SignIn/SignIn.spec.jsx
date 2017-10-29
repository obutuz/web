import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './SignIn';

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
    shallow(<SignIn {...props} />);
  });
});
