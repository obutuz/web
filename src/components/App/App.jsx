import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from '../Header';
import SideBar from '../SideBar';
import Home from '../Home';
import AccountsList from '../Accounts/Pages/List';
import SignIn from '../SignIn';

import './styles.css';

export const App = () => (
  <Router>
    <div>
      <div>
        <Header />
        <SideBar />
        <main className="app-content">
          <Route exact path="/" component={Home} />
          <Route path="/accounts" component={AccountsList} />
          <Route path="/sign_in" component={SignIn} />
        </main>
      </div>
    </div>
  </Router>
);

export default App;
