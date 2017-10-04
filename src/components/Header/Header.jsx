import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import styles from './styles';
import { toggleSideBar } from '../../actions/navigation';

export const Header = ({ classes, onSideBarClick }) => (
  <div>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          className={classes.navIconHide}
          onClick={onSideBarClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex} noWrap>
          Open Budget
        </Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onSideBarClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSideBarClick: () => {
    dispatch(toggleSideBar());
  },
});

const HeaderWithStyle = withStyles(styles)(Header);

export default connect(null, mapDispatchToProps)(HeaderWithStyle);
