import React from 'react';
import { mount } from 'enzyme';
import { Header } from './Header';

function setup() {
  const MockObject = jest.fn();

  const props = {
    classes: new MockObject(),
    onSideBarClick: jest.fn(),
  };

  const enzymeWrapper = mount(<Header {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Header', () => {
  it('renders self', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('Typography').text()).toBe('Open Budget');
  });
});
