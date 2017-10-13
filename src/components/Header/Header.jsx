import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import styles from './styles';
import { openSideBar } from '../../actions/navigation';

const SignInButton = () => (
  <Button
    color="contrast"
    component={Link}
    to="/sign_in"
  >
    Sign In
  </Button>
);

const SignOutButton = () => (
  <Button
    color="contrast"
    component={Link}
    to="/"
  >
    Sign Out
  </Button>
);

export const Header = ({ classes, sideBarOpen, onSideBarClick, isAuthenticated }) => (
  <div>
    <AppBar className={classNames(classes.appBar, sideBarOpen && classes.appBarShift)}>
      <Toolbar disableGutters={!sideBarOpen}>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          className={classNames(classes.menuButton, sideBarOpen && classes.hide)}
          onClick={onSideBarClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex} noWrap>
          Open Budget
        </Typography>
        {isAuthenticated ?
          <SignOutButton />
          :
          <SignInButton />
        }
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  sideBarOpen: PropTypes.bool.isRequired,
  onSideBarClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sideBarOpen: state.navigation.sideBar.open,
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  onSideBarClick: () => {
    dispatch(openSideBar());
  },
});

const HeaderWithStyle = withStyles(styles)(Header);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWithStyle);
