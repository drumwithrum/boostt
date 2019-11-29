import React from 'react';
import QuantityButton from './QuantityButton';
import { func, number } from 'prop-types';
import { Wrapper, QuantityText } from './QuantityField.style';

const QuantityField = ({ quantity, onChange, ...props }) => {
  const onItemAdd = () => onChange(quantity + 1);
  const onItemRemove = () => onChange(quantity - 1);
  return (
    <Wrapper>
      <QuantityButton onClick={onItemRemove} disabled={!quantity} />
        <QuantityText active={Boolean(quantity)}>{quantity}</QuantityText>
      <QuantityButton onClick={onItemAdd} adding />
    </Wrapper>
  );
}

QuantityField.propTypes = {
  onChange: func.isRequired,
  quantity: number,
}

QuantityField.defaultProps = {
  quantity: 0,
}

export default QuantityField;
