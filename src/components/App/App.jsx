import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles';
import withApp from '../withApp';

import Header from '../Header';
import SideBar from '../SideBar';
import Home from '../Home';
import AccountsList from '../Accounts/Pages/List';

const App = ({ classes, sideBarOpen }) => (
  <Router>
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header />
        <SideBar />
        <main className={classNames(classes.content, sideBarOpen && classes.contentShift)}>
          <Route exact path="/" component={Home} />
          <Route path="/accounts" component={AccountsList} />
        </main>
      </div>
    </div>
  </Router>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  sideBarOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sideBarOpen: state.navigation.sideBar.open,
});

const AppWithStyle = withStyles(styles)(App);
const ConnectedApp = connect(mapStateToProps, null)(AppWithStyle);

export default withApp(ConnectedApp);
