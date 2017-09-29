/* eslint arrow-body-style: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import styles from './styles';

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
  classes: PropTypes.shape.isRequired,
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts.fetchAccounts.accounts,
  };
};

const ListWithMap = connect(mapStateToProps, null)(List);

export default withStyles(styles)(ListWithMap);
