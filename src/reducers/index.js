import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import accounts from './accounts';
import navigation from './navigation';

export default combineReducers({
  accounts,
  navigation,
  form: formReducer,
});
