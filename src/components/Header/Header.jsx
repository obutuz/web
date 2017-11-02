import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
  Image,
} from 'semantic-ui-react';

import { signOutRequest } from '../../actions/authentication';
import { toggleSideBar } from '../../actions/navigation';

import logo from '../App/logo.png';

const AuthenticatedMenu = ({ onSignOutClick }) => (
  <Menu.Menu position="right">
    <Menu.Item as={Link} to="/" onClick={onSignOutClick}>Sign Out</Menu.Item>
  </Menu.Menu>
);

AuthenticatedMenu.propTypes = {
  onSignOutClick: PropTypes.func.isRequired,
};

const UnauthenticatedMenu = () => (
  <Menu.Menu position="right">
    <Menu.Item as={Link} to="/sign_in">Sign In</Menu.Item>
    <Menu.Item as={Link} to="/sign_up">Sign Up</Menu.Item>
  </Menu.Menu>
);

export const Header = ({
  isAuthenticated,
  onSignOutClick,
  onSidebarClick,
}) => (
  <Menu
    fixed="top"
    inverted
  >
    <Menu.Item as="a" style={{ marginLeft: '12em' }} onClick={onSidebarClick}>
      Menu
    </Menu.Item>
    <Container>
      <Menu.Item as={Link} to="/" header>
        <Image
          size="mini"
          src={logo}
          style={{ marginRight: '1.5em' }}
        />
        Open Budget
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
      {isAuthenticated ?
        <AuthenticatedMenu onSignOutClick={onSignOutClick} />
        :
        <UnauthenticatedMenu />
      }
    </Container>
  </Menu>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
  onSidebarClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  onSignOutClick: () => {
    return new Promise((resolve) => {
      dispatch(signOutRequest(resolve));
    });
  },
  onSidebarClick: () => {
    dispatch(toggleSideBar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
