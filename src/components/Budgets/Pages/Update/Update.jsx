import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchBudgetRequest,
  updateBudgetRequest,
} from '../../../../actions/budgets';
import BudgetForm from '../../Form';

export class UpdateBudget extends React.Component {
  componentWillMount() {
    this.props.fetchBudget(this.props.match.params.id);
  }

  render() {
    return (
      <BudgetForm
        initialValues={this.props.initialValues}
        onSubmit={this.props.onSubmit}
      />
    );
  }
}

UpdateBudget.propTypes = {
  initialValues: PropTypes.shape({
    budget_id: PropTypes.string.isRequired,
    budget_name: PropTypes.string.isRequired,
    budget_description: PropTypes.string,
  }).isRequired,
  fetchBudget: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      budget_id: state.budgets.activeBudget.id,
      budget_name: state.budgets.activeBudget.name,
      budget_description: state.budgets.activeBudget.description,
    },
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    return new Promise((resolve, reject) => {
      dispatch(updateBudgetRequest(values, resolve, reject));
    });
  },
  fetchBudget: (budgetId) => {
    return new Promise((resolve, reject) => {
      dispatch(fetchBudgetRequest(budgetId, resolve, reject));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBudget);
