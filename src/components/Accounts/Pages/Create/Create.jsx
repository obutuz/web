import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createAccountRequest } from '../../../../actions/accounts';
import AccountForm from '../../Form';

export const CreateAccount = ({ onSubmit }) => (
  <AccountForm onSubmit={onSubmit} />
);

CreateAccount.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    return new Promise((resolve, reject) => {
      dispatch(createAccountRequest(values, resolve, reject));
    });
  },
});

export default connect(null, mapDispatchToProps)(CreateAccount);
