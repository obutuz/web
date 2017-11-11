import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'semantic-ui-react';

export const List = ({ budgets }) => (
  <Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
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

export default List;
