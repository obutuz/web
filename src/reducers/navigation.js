import { MENU_BAR_TOGGLE } from '../actions/navigation';

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
    default:
      return state;
  }
};

export default navigation;
