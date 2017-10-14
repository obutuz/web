import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import styles from './styles';
import { fetchAccountsRequest } from '../../../../actions/accounts';

export const List = ({ classes, accounts }) => (
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
        {accounts.map((account) => {
          return (
            <TableRow key={account.id}>
              <TableCell>{account.id}</TableCell>
              <TableCell>{account.name}</TableCell>
              <TableCell>{account.description}</TableCell>
              <TableCell>{account.category}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

List.propTypes = {
  classes: PropTypes.object.isRequired,
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
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
        classes={this.props.classes}
        accounts={this.props.accounts}
      />
    );
  }
}

AccountsList.propTypes = {
  classes: PropTypes.object.isRequired,
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
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

const ListWithStyle = withStyles(styles)(AccountsList);

export default connect(mapStateToProps, null)(ListWithStyle);
