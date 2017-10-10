import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';

import styles from './styles';
import { signInRequest } from '../../actions/authentication';

import TextField from '../Form/TextField';

const SignIn = ({ classes, handleSubmit, onSubmit }) => (
  <Paper className={classes.root} elevation={4}>
    <Typography type="headline" component="h3">
      Sign In
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          id="email"
          name="email"
          type="email"
          component={TextField}
          label="Email"
        />
      </div>
      <div>
        <Field
          id="password"
          name="password"
          type="password"
          component={TextField}
          label="Password"
        />
      </div>
      <div>
        <Button
          raised
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </div>
    </form>
  </Paper>
);

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    dispatch(signInRequest(values));
  },
});

const SignInWithStyle = withStyles(styles)(SignIn);

const SignInForm = reduxForm({ form: 'signIn' })(SignInWithStyle);

export default connect(null, mapDispatchToProps)(SignInForm);
