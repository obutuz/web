import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

const BaseFormField = ({
  input,
  type,
  label,
  placeholder,
  as: As = Input,
  ...props
}) => {
  function handleChange(e, { value }) {
    input.onChange(value);
  }

  return (
    <Form.Field>
      <As
        {...props}
        {...input}
        value={input.value}
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Form.Field>
  );
};

BaseFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

BaseFormField.defaultProps = {
  as: Input,
  type: null,
  label: null,
  placeholder: null,
};

export default BaseFormField;
