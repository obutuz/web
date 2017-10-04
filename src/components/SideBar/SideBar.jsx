import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import AccountBalanceIcon from 'material-ui-icons/AccountBalance';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import styles from './styles';
import { closeSideBar } from '../../actions/navigation';

const SideBarItems = ({ classes, onSideBarItemClick }) => (
  <div>
    <div className={classes.drawerHeader} />
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
  </div>
);

SideBarItems.propTypes = {
  classes: PropTypes.object.isRequired,
  onSideBarItemClick: PropTypes.func.isRequired,
};

const SideBar = ({
  classes,
  sideBarOpen,
  onSideBarItemClick,
}) => (
  <Drawer
    type="persistent"
    classes={{
      paper: classes.drawerPaper,
    }}
    open={sideBarOpen}
  >
    <div className={classes.drawerInner}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={onSideBarItemClick}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <SideBarItems
        classes={classes}
        onSideBarItemClick={onSideBarItemClick}
      />
    </div>
  </Drawer>
);

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  sideBarOpen: PropTypes.bool.isRequired,
  onSideBarItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sideBarOpen: state.navigation.sideBar.open,
});

const mapDispatchToProps = dispatch => ({
  onSideBarItemClick: () => {
    dispatch(closeSideBar());
  },
});

const SideBarWithStyle = withStyles(styles)(SideBar);

export default connect(mapStateToProps, mapDispatchToProps)(SideBarWithStyle);
