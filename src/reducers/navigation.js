import {
  SIDE_BAR_TOGGLE,
  SIDE_BAR_CLOSE,
  SIDE_BAR_OPEN,
} from '../actions/navigation';

const initialState = {
  sideBar: {
    open: false,
  },
};

const navigation = (state = initialState, { type }) => {
  switch (type) {
    case SIDE_BAR_TOGGLE:
      return {
        ...state,
        sideBar: {
          open: !state.sideBar.open,
        },
      };
    case SIDE_BAR_CLOSE:
      return {
        ...state,
        sideBar: {
          open: false,
        },
      };
    case SIDE_BAR_OPEN:
      return {
        ...state,
        sideBar: {
          open: true,
        },
      };
    default:
      return state;
  }
};

export default navigation;
