import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Table } from 'semantic-ui-react';

import { fetchBudgetsRequest } from '../../../../actions/budgets';

export const List = ({ budgets }) => (
  <Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {budgets.map((budget) => {
          return (
            <Table.Row key={budget.id}>
              <Table.Cell>{budget.id}</Table.Cell>
              <Table.Cell>{budget.name}</Table.Cell>
              <Table.Cell>{budget.description}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </Container>
);

List.propTypes = {
  budgets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired).isRequired,
};

class BudgetsList extends React.Component {
  componentDidMount() {
    return new Promise((resolve, reject) => {
      this.props.dispatch(fetchBudgetsRequest(resolve, reject));
    });
  }

  render() {
    return (
      <List
        budgets={this.props.budgets}
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    budgets: state.budgets.budgetsList,
  };
};

export default connect(mapStateToProps, null)(BudgetsList);
