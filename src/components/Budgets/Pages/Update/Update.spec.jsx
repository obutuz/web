import React from 'react';
import { shallow } from 'enzyme';
import { UpdateBudget } from './Update';

describe('<UpdateBudget />', () => {
  let props;

  beforeEach(() => {
    props = {
      initialValues: {
        budget_id: '1',
        budget_name: 'Sample Budget',
        budget_description: 'This is a sample budget',
      },
      fetchBudget: jest.fn(),
      match: {
        params: {
          id: '1',
        },
      },
      onSubmit: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallow(<UpdateBudget {...props} />);
  });
});
