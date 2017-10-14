import React from 'react';
import { App } from './App';
import shallowWithContext from '../../testUtils';

describe('<App />', () => {
  let MockObject;
  let props;

  beforeEach(() => {
    MockObject = jest.fn();
    props = {
      classes: new MockObject(),
      sideBarOpen: false,
    };
  });

  it('renders component successfully', () => {
    shallowWithContext(<App {...props} />);
  });
});
