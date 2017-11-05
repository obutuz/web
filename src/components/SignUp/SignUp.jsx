import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Container, Form } from 'semantic-ui-react';

import { signUpRequest } from '../../actions/authentication';

import TextField from '../Form/TextField';

const SignUp = ({ handleSubmit, onSubmit }) => (
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

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    return new Promise((resolve, reject) => {
      dispatch(signUpRequest(values, resolve, reject));
    });
  },
});

const SignUpForm = reduxForm({ form: 'signUp' })(SignUp);

export default connect(null, mapDispatchToProps)(SignUpForm);
