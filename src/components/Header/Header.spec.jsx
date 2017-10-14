import React from 'react';
import { Header } from './Header';
import shallowWithContext from '../../testUtils';

describe('<Header />', () => {
  let MockObject;
  let props;

  beforeEach(() => {
    MockObject = jest.fn();
    props = {
      classes: new MockObject(),
      sideBarOpen: false,
      onSideBarClick: jest.fn(),
      isAuthenticated: false,
      onSignOutClick: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallowWithContext(<Header {...props} />);
  });
});
