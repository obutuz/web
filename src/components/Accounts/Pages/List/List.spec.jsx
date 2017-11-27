import React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';

describe('<List />', () => {
  let props;

  beforeEach(() => {
    props = {
      accounts: [],
      onAccountDeleteClick: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallow(<List {...props} />);
  });
});
