import React from 'react';
import { SideBar } from './SideBar';
import shallowWithContext from '../../testUtils';

describe('<SideBar />', () => {
  let MockObject;
  let props;

  beforeEach(() => {
    MockObject = jest.fn();
    props = {
      classes: new MockObject(),
      sideBarOpen: false,
      onSideBarItemClick: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallowWithContext(<SideBar {...props} />);
  });
});
