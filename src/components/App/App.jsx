import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Sidebar, Segment } from 'semantic-ui-react';

import Header from '../Header';
import SideBar from '../SideBar';
import Home from '../Home';
import AccountsList from '../Accounts/Pages/List';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

import '../../semantic-ui/dist/semantic.min.css';
import './styles.css';

export const App = () => (
  <Router>
    <div>
      <div>
        <Sidebar.Pushable as={Segment}>
          <Header />
          <SideBar />
          <Sidebar.Pusher>
            <main className="app-content">
              <Route exact path="/" component={Home} />
              <Route path="/accounts" component={AccountsList} />
              <Route path="/sign_in" component={SignIn} />
              <Route path="/sign_up" component={SignUp} />
            </main>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    </div>
  </Router>
);

export default App;
