import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import accounts from './accounts';
import navigation from './navigation';
import authentication from './authentication';

export default combineReducers({
  accounts,
  navigation,
  authentication,
  form: formReducer,
});
