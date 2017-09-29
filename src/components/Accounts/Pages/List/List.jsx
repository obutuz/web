/* eslint arrow-body-style: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import styles from './styles';

const data = [
  {
    id: 1,
    name: 'Petty Cash',
    description: 'This is an account',
    category: 'Cash',
  },
  {
    id: 2,
    name: 'BDO Savings',
    description: 'This is an account',
    category: 'Savings',
  },
  {
    id: 3,
    name: 'BPI Checking',
    description: 'This is an account',
    category: 'Checking',
  },
];

const List = ({ classes }) => (
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
        {data.map((n) => {
          return (
            <TableRow key={n.id}>
              <TableCell>{n.id}</TableCell>
              <TableCell>{n.name}</TableCell>
              <TableCell>{n.description}</TableCell>
              <TableCell>{n.category}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

List.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(List);
