import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Table } from 'semantic-ui-react';

import { fetchAccountRequest } from '../../../../actions/accounts';

export const Detail = ({ account }) => (
  <Container>
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell>ID</Table.Cell>
          <Table.Cell>{account.id}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>{account.name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{account.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Account Type</Table.Cell>
          <Table.Cell>{account.category}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

Detail.propTypes = {
  account: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

class AccountDetail extends React.Component {
  componentWillMount() {
    return new Promise((resolve, reject) => {
      this.props.dispatch(fetchAccountRequest(resolve, reject, this.props.match.params.id));
    });
  }

  render() {
    return (
      <Detail account={this.props.account} />
    );
  }
}

AccountDetail.propTypes = {
  account: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    account: state.accounts.activeAccount,
  };
};

export default connect(mapStateToProps, null)(AccountDetail);
