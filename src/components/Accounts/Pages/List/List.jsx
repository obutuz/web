/* eslint arrow-body-style: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import styles from './styles';
import { fetchAccountsRequest } from '../../../../actions/accounts';

const List = ({ classes, accounts }) => (
  <Paper className={classes.paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Category</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(accounts).map((account) => {
          return (
            <TableRow key={account[1].id}>
              <TableCell>{account[1].id}</TableCell>
              <TableCell>{account[1].attributes.name}</TableCell>
              <TableCell>{account[1].attributes.description}</TableCell>
              <TableCell>{account[1].attributes.category}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

List.propTypes = {
  classes: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

class AccountsList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAccountsRequest());
  }

  render() {
    return (
      <List
        classes={this.props.classes}
        accounts={this.props.accounts}
      />
    );
  }
}

AccountsList.propTypes = {
  classes: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts.fetchAccounts.accounts,
  };
};

const ListWithMap = connect(mapStateToProps, null)(AccountsList);

export default withStyles(styles)(ListWithMap);
