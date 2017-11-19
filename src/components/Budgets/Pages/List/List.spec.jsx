import React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';

describe('<List />', () => {
  let props;

  beforeEach(() => {
    props = {
      budgets: [],
      onBudgetDeleteClick: jest.fn(),
      onBudgetSwitchClick: jest.fn(),
      defaultBudgetId: '1',
    };
  });

  it('renders component successfully', () => {
    shallow(<List {...props} />);
  });
});
