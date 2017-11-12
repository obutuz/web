import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  Icon,
  Menu,
} from 'semantic-ui-react';

export const SideBar = ({
  sideBarOpen,
}) => (
  <Sidebar
    as={Menu}
    animation="push"
    width="thin"
    visible={sideBarOpen}
    icon="labeled"
    vertical
    inverted
  >
    <Menu.Item name="home" as={Link} to="/">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item name="accounts" as={Link} to="/accounts">
      <Icon name="university" />
      Accounts
    </Menu.Item>
    <Menu.Item name="budgets" as={Link} to="/budgets">
      <Icon name="inbox" />
      Budgets
    </Menu.Item>
  </Sidebar>
);

SideBar.propTypes = {
  sideBarOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sideBarOpen: state.navigation.sideBar.open,
});

export default connect(mapStateToProps, null)(SideBar);
