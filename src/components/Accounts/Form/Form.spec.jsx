import React from 'react';
import { shallow } from 'enzyme';
import { AccountForm } from './Form';

describe('<AccountForm />', () => {
  let props;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallow(<AccountForm {...props} />);
  });
});
