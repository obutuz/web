import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchBudgetsRequest, deleteBudgetRequest, switchBudgetRequest } from '../../../../actions/budgets';

export const List = ({
  budgets,
  onBudgetDeleteClick,
  onBudgetSwitchClick,
  defaultBudgetId,
}) => (
  <Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {budgets.map((budget) => {
          return (
            <Table.Row key={budget.id}>
              <Table.Cell><Link to={`/budgets/${budget.id}`}>{budget.id}</Link></Table.Cell>
              <Table.Cell><Link to={`/budgets/${budget.id}`}>{budget.name}</Link></Table.Cell>
              <Table.Cell>{budget.description}</Table.Cell>
              <Table.Cell>
                <Button as={Link} to={`/budgets/${budget.id}/edit`}>Edit</Button>
                <Button
                  onClick={() => onBudgetSwitchClick(budget.id)}
                  color="yellow"
                  disabled={budget.id === defaultBudgetId}
                >
                  {budget.id === defaultBudgetId ?
                    'Default Budget'
                    :
                    'Set as Default'
                  }
                </Button>
                <Button
                  onClick={() => onBudgetDeleteClick(budget.id)}
                  color="red"
                  disabled={budget.id === defaultBudgetId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
    <Button as={Link} to="/budgets/new" color="green">Create Budget</Button>
  </Container>
);

List.propTypes = {
  budgets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired).isRequired,
  onBudgetDeleteClick: PropTypes.func.isRequired,
  onBudgetSwitchClick: PropTypes.func.isRequired,
  defaultBudgetId: PropTypes.string.isRequired,
};

class BudgetsList extends React.Component {
  componentDidMount() {
    this.props.fetchBudgets();
  }

  render() {
    return (
      <List
        budgets={this.props.budgets}
        onBudgetDeleteClick={this.props.onBudgetDeleteClick}
        onBudgetSwitchClick={this.props.onBudgetSwitchClick}
        defaultBudgetId={this.props.defaultBudgetId}
      />
    );
  }
}

BudgetsList.propTypes = {
  budgets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired).isRequired,
  fetchBudgets: PropTypes.func.isRequired,
  onBudgetDeleteClick: PropTypes.func.isRequired,
  onBudgetSwitchClick: PropTypes.func.isRequired,
  defaultBudgetId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  budgets: state.budgets.budgetsList,
  defaultBudgetId: state.budgets.defaultBudgetId,
})

const mapDispatchToProps = dispatch => ({
  fetchBudgets: () => {
    return new Promise((resolve, reject) => {
      dispatch(fetchBudgetsRequest(resolve, reject));
    });
  },
  onBudgetDeleteClick: (id) => {
    return new Promise((resolve, reject) => {
      dispatch(deleteBudgetRequest(id, resolve, reject));
    });
  },
  onBudgetSwitchClick: (id) => {
    return new Promise((resolve, reject) => {
      dispatch(switchBudgetRequest(id, resolve, reject));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsList);
