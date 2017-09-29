/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const OpenBudget = () => (
  <App />
);

ReactDOM.render(<OpenBudget />, document.getElementById('root'));
registerServiceWorker();
