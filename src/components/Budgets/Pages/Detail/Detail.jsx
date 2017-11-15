import React from 'react';
import { Button, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const Detail = () => (
  <Container>
    <Button as={Link} to="/budgets">Back to Budgets</Button>
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell>ID</Table.Cell>
          <Table.Cell>1</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Sample Budget</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>Sample Description</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

export default (Detail);
