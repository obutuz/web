import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userAuthenticationCheckRequest } from '../../actions/authentication';

function withAuthentication(WrappedComponent) {
  class WithAuthentication extends React.Component {
    componentWillMount() {
      this.props.checkAuthentication(this.props.isAuthenticated);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithAuthentication.propTypes = {
    checkAuthentication: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.authentication.isAuthenticated,
  });

  const mapDispatchToProps = dispatch => ({
    checkAuthentication: (isAuthenticated) => {
      return new Promise((resolve, reject) => {
        dispatch(userAuthenticationCheckRequest(isAuthenticated, resolve, reject));
      });
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
