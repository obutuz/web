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
import { toggleSideBar, closeSideBar } from '../../actions/navigation';

const SideBarItems = ({ classes, onSideBarItemClick }) => (
  <div>
    <div className={classes.drawerHeader} />
    <Divider />
    <List>
      <ListItem
        button
        component={Link}
        to="/"
        onClick={onSideBarItemClick}
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
        onClick={onSideBarItemClick}
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
  onSideBarItemClick: PropTypes.func.isRequired,
};

const SideBar = ({ classes, sideBarOpen, onRequestClose, onSideBarItemClick }) => (
  <div>
    <Hidden mdUp>
      <Drawer
        type="temporary"
        open={sideBarOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        onRequestClose={onRequestClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SideBarItems
          classes={classes}
          onSideBarItemClick={onSideBarItemClick}
        />
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
        <SideBarItems
          classes={classes}
          onSideBarItemClick={onSideBarItemClick}
        />
      </Drawer>
    </Hidden>
  </div>
);

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  sideBarOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSideBarItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sideBarOpen: state.navigation.sideBar.open,
});

const mapDispatchToProps = dispatch => ({
  onRequestClose: () => {
    dispatch(toggleSideBar());
  },
  onSideBarItemClick: () => {
    dispatch(closeSideBar());
  },
});

const SideBarWithStyle = withStyles(styles)(SideBar);

export default connect(mapStateToProps, mapDispatchToProps)(SideBarWithStyle);
