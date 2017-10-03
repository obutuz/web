import { combineReducers } from 'redux';

import accounts from './accounts';
import navigation from './navigation';

export default combineReducers({
  accounts,
  navigation,
});
