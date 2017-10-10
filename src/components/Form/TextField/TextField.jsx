import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from 'material-ui/TextField';

const TextField = ({
  id,
  name,
  label,
  input,
  className,
  type,
}) => (
  <MuiTextField
    id={id}
    name={name}
    label={label}
    className={className}
    type={type}
    {...input}
  />
);

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

TextField.defaultProps = {
  id: '',
  name: '',
  label: '',
  className: '',
  type: '',
};

export default TextField;
