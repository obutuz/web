import React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';

describe('<List />', () => {
  let props;

  beforeEach(() => {
    props = {
      accounts: [],
    };
  });

  it('renders component successfully', () => {
    shallow(<List {...props} />);
  });
});
