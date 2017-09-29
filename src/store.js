import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { history } from './services';

import rootReducer from './reducers';

const store = createStore(
  connectRouter(history)(rootReducer),
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

export default store;
