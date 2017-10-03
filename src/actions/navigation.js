export const MENU_BAR_OPEN = 'MENU_BAR_OPEN';
export const MENU_BAR_CLOSE = 'MENU_BAR_CLOSE';
export const MENU_BAR_TOGGLE = 'MENU_BAR_TOGGLE';

export const toggleMenuBar = () => ({
  type: MENU_BAR_TOGGLE,
});

export const closeMenuBar = () => ({
  type: MENU_BAR_CLOSE,
});
