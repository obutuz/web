import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchAccountsRequest, deleteAccountRequest } from '../../../../actions/accounts';

export const List = ({ accounts, onAccountDeleteClick }) => (
  <Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {accounts.map((account) => {
          return (
            <Table.Row key={account.id}>
              <Table.Cell><Link to={`/accounts/${account.id}`}>{account.id}</Link></Table.Cell>
              <Table.Cell><Link to={`/accounts/${account.id}`}>{account.name}</Link></Table.Cell>
              <Table.Cell>{account.description}</Table.Cell>
              <Table.Cell>{account.category}</Table.Cell>
              <Table.Cell>
                <Button as={Link} to={`/accounts/${account.id}/edit`}>Edit</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => onAccountDeleteClick(account.id)} color="red">
                  Delete
                </Button>
              </Table.Cell>
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
  onAccountDeleteClick: PropTypes.func.isRequired,
};

class AccountsList extends React.Component {
  componentWillMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <List
        accounts={this.props.accounts}
        onAccountDeleteClick={this.props.onAccountDeleteClick}
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
  fetchAccounts: PropTypes.func.isRequired,
  onAccountDeleteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts.accountsList,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAccounts: () => {
    return new Promise((resolve, reject) => {
      dispatch(fetchAccountsRequest(resolve, reject));
    });
  },
  onAccountDeleteClick: (id) => {
    return new Promise((resolve, reject) => {
      dispatch(deleteAccountRequest(id, resolve, reject));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsList);
