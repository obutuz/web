import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchAccountRequest,
  updateAccountRequest,
} from '../../../../actions/accounts';
import AccountForm from '../../Form';

export class UpdateAccount extends React.Component {
  componentWillMount() {
    this.props.fetchAccount(this.props.match.params.id);
  }

  render() {
    return (
      <AccountForm
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
      />
    );
  }
}

UpdateAccount.propTypes = {
  initialValues: PropTypes.shape({
    account_id: PropTypes.string.isRequired,
    account_name: PropTypes.string.isRequired,
    account_description: PropTypes.string,
    account_category: PropTypes.string.isRequired,
  }).isRequired,
  fetchAccount: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      account_id: state.accounts.activeAccount.id,
      account_name: state.accounts.activeAccount.name,
      account_description: state.accounts.activeAccount.description,
      account_category: state.accounts.activeAccount.category,
    },
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    return new Promise((resolve, reject) => {
      dispatch(updateAccountRequest(values, resolve, reject));
    });
  },
  fetchAccount: (accountId) => {
    return new Promise((resolve, reject) => {
      dispatch(fetchAccountRequest(resolve, reject, accountId));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccount);
