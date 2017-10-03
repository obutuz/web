import {
  MENU_BAR_TOGGLE,
  MENU_BAR_CLOSE,
} from '../actions/navigation';

const initialState = {
  menuBar: {
    open: false,
  },
};

const navigation = (state = initialState, { type }) => {
  switch (type) {
    case MENU_BAR_TOGGLE:
      return {
        ...state,
        menuBar: {
          open: !state.menuBar.open,
        },
      };
    case MENU_BAR_CLOSE:
      return {
        ...state,
        menuBar: {
          open: false,
        },
      };
    default:
      return state;
  }
};

export default navigation;
