import React from 'react';
import { shallow } from 'enzyme';
import { CreateAccount } from './Create';

describe('<CreateAccount />', () => {
  let props;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallow(<CreateAccount {...props} />);
  });
});
