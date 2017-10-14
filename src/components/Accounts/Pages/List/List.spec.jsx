import React from 'react';
import { List } from './List';
import shallowWithContext from '../../../../testUtils';

describe('<List />', () => {
  let MockObject;
  let props;

  beforeEach(() => {
    MockObject = jest.fn();
    props = {
      classes: new MockObject(),
      accounts: [],
    };
  });

  it('renders component successfully', () => {
    shallowWithContext(<List {...props} />);
  });
});
