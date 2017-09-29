import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';

import styles from './styles';

const Home = ({ classes }) => (
  <div className={classes.root}>
    <Typography type="display1" gutterBottom>
      Open Budget
    </Typography>
    <Typography type="subheading" gutterBottom>
      An open source budgeting app
    </Typography>
  </div>
);


Home.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Home);
