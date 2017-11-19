import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {
  let props;

  beforeEach(() => {
    props = {
      isAuthenticated: false,
      onSignOutClick: jest.fn(),
      onSidebarClick: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallow(<Header {...props} />);
  });
});
