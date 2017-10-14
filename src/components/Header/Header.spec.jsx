import React from 'react';
import { shallow } from 'enzyme';
import { createMuiTheme } from 'material-ui/styles';
import { Header } from './Header';

describe('<Header />', () => {
  const muiTheme = createMuiTheme();
  const shallowWithContext = node => shallow(node, { context: { muiTheme } }).dive();
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
