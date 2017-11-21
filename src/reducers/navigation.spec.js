import reducer from './navigation';

import * as navigation from '../actions/navigation';

describe('Navigation reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      sideBar: {
        open: true,
      },
    });
  });

  it('handles SIDE_BAR_CLOSE', () => {
    expect(reducer([], {
      type: navigation.SIDE_BAR_CLOSE,
    })).toEqual({
      sideBar: {
        open: false,
      },
    });
  });

  it('handles SIDE_BAR_OPEN', () => {
    expect(reducer([], {
      type: navigation.SIDE_BAR_OPEN,
    })).toEqual({
      sideBar: {
        open: true,
      },
    });
  });
});
