import React from 'react';
import { Container, Table } from 'semantic-ui-react';

export const Detail = () => (
  <Container>
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell>ID</Table.Cell>
          <Table.Cell>1</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Petty Cash</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>This is an account</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Account Type</Table.Cell>
          <Table.Cell>Savings</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

export default Detail;
