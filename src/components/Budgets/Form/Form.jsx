import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Button, Container, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import TextField from '../../Form/TextField';
import TextArea from '../../Form/TextArea';
import { required } from '../../Form/Validation';

export const BudgetForm = ({ handleSubmit, onSubmit }) => (
  <Container>
    <Button as={Link} to="/budgets">Back to Budgets</Button>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field
        id="budget_id"
        name="budget_id"
        component="input"
        type="hidden"
      />
      <Form.Field>
        <label htmlFor="budget_name">Name</label>
        <Field
          id="budget_name"
          name="budget_name"
          placeholder="Budget Name"
          type="text"
          component={TextField}
          validate={required}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="budget_description">Description</label>
        <Field
          id="budget_description"
          name="budget_description"
          placeholder="Description"
          component={TextArea}
        />
      </Form.Field>
      <Button color="teal" type="submit">Submit</Button>
    </Form>
  </Container>
);

BudgetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'budgetForm', enableReinitialize: true })(BudgetForm);
