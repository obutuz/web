export const SIDE_BAR_OPEN = 'SIDE_BAR_OPEN';
export const SIDE_BAR_CLOSE = 'SIDE_BAR_CLOSE';
export const SIDE_BAR_TOGGLE = 'SIDE_BAR_TOGGLE';

export const toggleSideBar = () => ({
  type: SIDE_BAR_TOGGLE,
});

export const closeSideBar = () => ({
  type: SIDE_BAR_CLOSE,
});
