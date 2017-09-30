import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import styles from './styles';

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Open Budget
        </Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
