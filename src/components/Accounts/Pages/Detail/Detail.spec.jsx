import React from 'react';
import { shallow } from 'enzyme';
import { Detail } from './Detail';

describe('<List />', () => {
  let props;

  beforeEach(() => {
    props = {
      account: {
        id: '1',
        name: 'Petty Cash',
        description: 'This is a sample account',
        category: 'Cash',
      },
    };
  });

  it('renders component successfully', () => {
    shallow(<Detail {...props} />);
  });
});
