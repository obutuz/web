import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Container, Form } from 'semantic-ui-react';

import TextField from '../../../Form/TextField';
import TextArea from '../../../Form/TextArea';
import SelectField from '../../../Form/SelectField';

const accountTypes = [
  {
    value: 'cash',
    text: 'Cash',
  },
  {
    value: 'savings',
    text: 'Savings',
  },
  {
    value: 'checking',
    text: 'Checking',
  },
  {
    value: 'credit_card',
    text: 'Credit Card',
  },
];

const CreateAccount = () => (
  <Container>
    <Form>
      <Form.Field>
        <label htmlFor="account_name">Name</label>
        <Field
          id="account_name"
          name="account_name"
          placeholder="Account Name"
          type="text"
          component={TextField}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="account_description">Description</label>
        <Field
          id="account_description"
          name="account_description"
          placeholder="Description"
          component={TextArea}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="account_category">Type</label>
        <Field
          id="account_category"
          name="account_category"
          placeholder="Choose type of account"
          component={SelectField}
          options={accountTypes}
        />
      </Form.Field>
      <Button color="teal" type="submit">Submit</Button>
    </Form>
  </Container>
);

export default reduxForm({ form: 'accountCreate' })(CreateAccount);
