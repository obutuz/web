import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import styles from './styles';
import withApp from '../withApp';

import Header from '../Header';
import Home from '../Home';
import AccountsList from '../Accounts/Pages/List';

const App = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/accounts" component={AccountsList} />
    </div>
  </Router>
);

App.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withApp(withStyles(styles)(App));
