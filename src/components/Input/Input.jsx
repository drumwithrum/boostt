import React from 'react';
import { string, func } from 'prop-types';
import { InputBase, Wrapper, Icon } from './Input.style';

const FormInput = ({
  placeholder,
  onChange,
  value,
  name,
  type,
  color,
  backgroundColor,
  icon,
  inputProps,
  ...props
}) => (
  <Wrapper {...props}>
    <InputBase
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
      color={color}
      backgroundColor={backgroundColor}
      {...inputProps}
    />
    {icon && <Icon src={icon} alt={`${name}-input-icon`} />}
  </Wrapper>
);

FormInput.propTypes = {
  placeholder: string,
  onChange: func.isRequired,
  name: string.isRequired,
  type: string,
  value: string,
  icon: string,
}

FormInput.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
  color: '',
  icon: '',
}

export default FormInput;
