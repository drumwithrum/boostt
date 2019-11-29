import React from 'react';
import images from './images';
import { bool, func } from 'prop-types';
import { Button } from './QuantityButton.style';

const QuantityButton = ({ adding, onClick, disabled, ...props }) => (
  <Button disabled={disabled} onClick={onClick} {...props}>
    <img src={adding ? images.plus : images.minus} alt={adding ? 'plus' : 'minus'} />
  </Button>
)

QuantityButton.propTypes = {
  adding: bool,
  disabled: bool,
  onClick: func.isRequired,
}

QuantityButton.defaultProps = {
  adding: false,
  disabled: false,
}

export default QuantityButton;
