import * as navigation from './navigation';

describe('toggleSideBar', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: navigation.SIDE_BAR_TOGGLE,
    };

    expect(navigation.toggleSideBar()).toEqual(expectedAction);
  });
});

describe('closeSideBar', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: navigation.SIDE_BAR_CLOSE,
    };

    expect(navigation.closeSideBar()).toEqual(expectedAction);
  });
});

describe('openSideBar', () => {
  it('returns the correct response', () => {
    const expectedAction = {
      type: navigation.SIDE_BAR_OPEN,
    };

    expect(navigation.openSideBar()).toEqual(expectedAction);
  });
});
