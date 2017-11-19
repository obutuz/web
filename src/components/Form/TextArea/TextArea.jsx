import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import BaseFormField from '../BaseFormField';

const TextArea = ({
  input,
  id,
  name,
  placeholder,
  ...props
}) => (
  <BaseFormField
    id={id}
    name={name}
    placeholder={placeholder}
    input={input}
    as={Form.TextArea}
    {...props}
  />
);

TextArea.propTypes = {
  input: PropTypes.object.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  id: '',
  name: '',
  placeholder: '',
};

export default TextArea;
