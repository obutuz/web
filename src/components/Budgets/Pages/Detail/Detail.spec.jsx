import React from 'react';
import { shallow } from 'enzyme';
import { Detail } from './Detail';

describe('<List />', () => {
  let props;

  beforeEach(() => {
    props = {
      budget: {
        id: '1',
        name: 'Sample Budget',
        description: 'This is a sample budget',
      },
    };
  });

  it('renders component successfully', () => {
    shallow(<Detail {...props} />);
  });
});
