import React from 'react';
import { shallow } from 'enzyme';
import { SideBar } from './SideBar';

describe('<SideBar />', () => {
  let props;

  beforeEach(() => {
    props = {
      sideBarOpen: false,
    };
  });

  it('renders component successfully', () => {
    shallow(<SideBar {...props} />);
  });
});
