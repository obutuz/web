/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from './store';
import history from './history';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const OpenBudget = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<OpenBudget />, document.getElementById('root'));
registerServiceWorker();
