import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Table } from 'semantic-ui-react';

import { fetchAccountsRequest } from '../../../../actions/accounts';

export const List = ({ accounts }) => (
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
        {accounts.map((account) => {
          return (
            <Table.Row key={account.id}>
              <Table.Cell>{account.id}</Table.Cell>
              <Table.Cell>{account.name}</Table.Cell>
              <Table.Cell>{account.description}</Table.Cell>
              <Table.Cell>{account.category}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </Container>
);

List.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

class AccountsList extends React.Component {
  componentDidMount() {
    return new Promise((resolve, reject) => {
      this.props.dispatch(fetchAccountsRequest(resolve, reject));
    });
  }

  render() {
    return (
      <List
        accounts={this.props.accounts}
      />
    );
  }
}

AccountsList.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts.accountsList,
  };
};

export default connect(mapStateToProps, null)(AccountsList);
