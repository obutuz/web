import React from 'react';
import PropTypes from 'prop-types';

import BaseFormField from '../BaseFormField';

const TextField = ({
  input,
  id,
  name,
  icon,
  iconPosition,
  placeholder,
  type,
  ...props
}) => (
  <BaseFormField
    fluid
    id={id}
    name={name}
    icon={icon}
    iconPosition={iconPosition}
    placeholder={placeholder}
    type={type}
    input={input}
    {...props}
  />
);

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TextField.defaultProps = {
  id: '',
  name: '',
  icon: null,
  iconPosition: null,
  placeholder: '',
  type: '',
};

export default TextField;
