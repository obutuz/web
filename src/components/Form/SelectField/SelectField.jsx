import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import BaseFormField from '../BaseFormField';

const SelectField = ({
  input,
  id,
  name,
  placeholder,
  options,
  ...props
}) => {
  return (
    <BaseFormField
      id={id}
      name={name}
      placeholder={placeholder}
      options={options}
      input={input}
      as={Form.Select}
      {...props}
    />
  );
};

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

SelectField.defaultProps = {
  id: '',
  name: '',
  placeholder: '',
};

export default SelectField;

