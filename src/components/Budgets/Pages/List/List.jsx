import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchBudgetsRequest, deleteBudgetRequest } from '../../../../actions/budgets';

export const List = ({ budgets, onBudgetDeleteClick }) => (
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
                <Button onClick={() => onBudgetDeleteClick(budget.id)} color="red">
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
};

const mapStateToProps = (state) => {
  return {
    budgets: state.budgets.budgetsList,
  };
};

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
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsList);
