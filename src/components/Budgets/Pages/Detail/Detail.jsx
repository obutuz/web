import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchBudgetRequest } from '../../../../actions/budgets';

export const Detail = ({ budget }) => (
  <Container>
    <Button as={Link} to="/budgets">Back to Budgets</Button>
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell>ID</Table.Cell>
          <Table.Cell>{budget.id}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>{budget.name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{budget.description}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

Detail.propTypes = {
  budget: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

class BudgetDetail extends React.Component {
  componentWillMount() {
    return new Promise((resolve, reject) => {
      this.props.dispatch(fetchBudgetRequest(this.props.match.params.id, resolve, reject));
    });
  }

  render() {
    return (
      <Detail budget={this.props.budget} />
    );
  }
}

BudgetDetail.propTypes = {
  budget: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    budget: state.budgets.activeBudget,
  };
};

export default connect(mapStateToProps, null)(BudgetDetail);
