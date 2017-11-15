import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Sidebar, Segment } from 'semantic-ui-react';

import withAuthentication from './withAuthentication';

import Header from '../Header';
import SideBar from '../SideBar';
import Home from '../Home';
import AccountsList from '../Accounts/Pages/List';
import AccountCreate from '../Accounts/Pages/Create';
import AccountDetail from '../Accounts/Pages/Detail';
import AccountUpdate from '../Accounts/Pages/Update';
import BudgetsList from '../Budgets/Pages/List';
import BudgetDetail from '../Budgets/Pages/Detail';
import BudgetCreate from '../Budgets/Pages/Create';
import BudgetUpdate from '../Budgets/Pages/Update';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

import '../../semantic-ui/dist/semantic.min.css';
import './styles.css';

export const App = () => (
  <div>
    <div>
      <Sidebar.Pushable as={Segment}>
        <Header />
        <SideBar />
        <Sidebar.Pusher>
          <main className="app-content">
            <Route exact path="/" component={withAuthentication(Home)} />
            <Switch>
              <Route exact path="/accounts" component={withAuthentication(AccountsList)} />
              <Route exact path="/accounts/new" component={withAuthentication(AccountCreate)} />
              <Route exact path="/accounts/:id/edit" component={withAuthentication(AccountUpdate)} />
              <Route exact path="/accounts/:id" component={withAuthentication(AccountDetail)} />
            </Switch>
            <Switch>
              <Route exact path="/budgets" component={withAuthentication(BudgetsList)} />
              <Route exact path="/budgets/new" component={withAuthentication(BudgetCreate)} />
              <Route exact path="/budgets/:id/edit" component={withAuthentication(BudgetUpdate)} />
              <Route exact path="/budgets/:id" component={withAuthentication(BudgetDetail)} />
            </Switch>
            <Route path="/sign_in" component={SignIn} />
            <Route path="/sign_up" component={SignUp} />
          </main>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  </div>
);

export default App;
