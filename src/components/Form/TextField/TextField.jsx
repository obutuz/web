import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';


const TextField = ({
  input,
  id,
  name,
  icon,
  iconPosition,
  placeholder,
  type,
}) => (
  <Form.Input
    fluid
    id={id}
    name={name}
    icon={icon}
    iconPosition={iconPosition}
    placeholder={placeholder}
    type={type}
    {...input}
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
  icon: '',
  iconPosition: '',
  placeholder: '',
  type: '',
};

export default TextField;
