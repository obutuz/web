import React from 'react';
import { shallow } from 'enzyme';
import { UpdateAccount } from './Update';

describe('<UpdateAccount />', () => {
  let props;

  beforeEach(() => {
    props = {
      initialValues: {
        account_id: '1',
        account_name: 'Sample Account',
        account_description: 'This is a sample account',
        account_category: 'cash',
      },
      fetchAccount: jest.fn(),
      match: {
        params: {
          id: '1',
        },
      },
      onSubmit: jest.fn(),
    };
  });

  it('renders component successfully', () => {
    shallow(<UpdateAccount {...props} />);
  });
});
