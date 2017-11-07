import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Container, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import { signUpRequest } from '../../actions/authentication';

import TextField from '../Form/TextField';

export const SignUp = ({ handleSubmit, onSubmit, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          icon="user"
          iconPosition="left"
          id="email"
          name="email"
          placeholder="Email Address"
          type="email"
          component={TextField}
        />
        <Field
          icon="lock"
          iconPosition="left"
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          component={TextField}
        />
        <Button type="submit" color="teal">Submit</Button>
      </Form>
    </Container>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    return new Promise((resolve, reject) => {
      dispatch(signUpRequest(values, resolve, reject));
    });
  },
});

const SignUpForm = reduxForm({ form: 'signUp' })(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
