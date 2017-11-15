import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Container, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import TextField from '../../Form/TextField';
import TextArea from '../../Form/TextArea';

export const BudgetForm = () => (
  <Container>
    <Button as={Link} to="/budgets">Back to Budgets</Button>
    <Form>
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

export default reduxForm({ form: 'budgetForm', enableReinitialize: true })(BudgetForm);
