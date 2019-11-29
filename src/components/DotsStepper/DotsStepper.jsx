import React from 'react';
import { arrayOf, number, any } from 'prop-types';
import { Wrapper, StepperItem } from './DotsStepper.style';

const DotsStepper = ({ items, activeItem, ...props }) => {
  return (
    <Wrapper>
      {items.map((img, index) => <StepperItem key={`stepper-item-${index}`} active={index === activeItem} />)}
    </Wrapper>
  )
}

DotsStepper.propTypes = {
  items: arrayOf(any),
  activeItem: number.isRequired,
}

DotsStepper.defaultProps = {
  items: [],
}

export default DotsStepper;
