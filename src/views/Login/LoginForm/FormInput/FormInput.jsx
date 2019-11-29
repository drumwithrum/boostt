import React from 'react';
import { string, func } from 'prop-types';
import { InputBase } from './FormInput.style';

const FormInput = ({
  placeholder,
  onChange,
  value,
  name,
  type,
  ...props
}) => (
  <InputBase
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    type={type}
    {...props}
  />
);

FormInput.propTypes = {
  placeholder: string,
  onChange: func.isRequired,
  name: string.isRequired,
  type: string,
  value: string,
}

FormInput.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
}

export default FormInput;
