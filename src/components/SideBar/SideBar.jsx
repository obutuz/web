import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import AccountBalanceIcon from 'material-ui-icons/AccountBalance';

import styles from './styles';
import { toggleMenuBar } from '../../actions/navigation';

const SideBarItems = ({ classes }) => (
  <div>
    <div className={classes.drawerHeader} />
    <Divider />
    <List>
      <ListItem
        button
        component={Link}
        to="/"
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/accounts"
      >
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Accounts" />
      </ListItem>
    </List>
    <Divider />
  </div>
);

SideBarItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SideBar = ({ classes, menuBarOpen, onRequestClose }) => (
  <div>
    <Hidden mdUp>
      <Drawer
        type="temporary"
        open={menuBarOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        onRequestClose={onRequestClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SideBarItems classes={classes} />
      </Drawer>
    </Hidden>
    <Hidden mdDown implementation="css">
      <Drawer
        type="permanent"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SideBarItems classes={classes} />
      </Drawer>
    </Hidden>
  </div>
);

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  menuBarOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  menuBarOpen: state.navigation.menuBar.open,
});

const mapDispatchToProps = dispatch => ({
  onRequestClose: () => {
    dispatch(toggleMenuBar());
  },
});

const SideBarWithStyle = withStyles(styles)(SideBar);

export default connect(mapStateToProps, mapDispatchToProps)(SideBarWithStyle);
