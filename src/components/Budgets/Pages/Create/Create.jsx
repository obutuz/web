import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createBudgetRequest } from '../../../../actions/budgets';
import BudgetForm from '../../Form';

export const CreateBudget = ({ onSubmit }) => (
  <BudgetForm onSubmit={onSubmit} />
);

CreateBudget.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    return new Promise((resolve, reject) => {
      dispatch(createBudgetRequest(values, resolve, reject));
    });
  },
});

export default connect(null, mapDispatchToProps)(CreateBudget);
