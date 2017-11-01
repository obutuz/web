import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

import { signInRequest } from '../../actions/authentication';

import './styles.css';
import logo from '../App/logo.png';

import TextField from '../Form/TextField';

export const SignIn = ({ handleSubmit, onSubmit, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin-form">
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={logo} />
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <Segment stacked>
              <Field
                icon="user"
                iconPosition="left"
                id="email"
                name="email"
                placeholder="Email address"
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

              <Button color="teal" fluid size="large">Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/sign_up">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
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
      dispatch(signInRequest(values, resolve, reject));
    });
  },
});

const SignInForm = reduxForm({ form: 'signIn' })(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
