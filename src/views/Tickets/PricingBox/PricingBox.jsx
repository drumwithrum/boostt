import React from 'react';
import { Wrapper, Title, Subtitle, TextWrapper } from './PricingBox.style';
import { QuantityField } from '../../../components';
import colors from '../../../config/colors';
import { func, number, string } from 'prop-types';

const PricingBox = ({ quantity, onChange, title, subtitle,...props }) => {
  return (
    <Wrapper {...props}>
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle color={colors.disabled}>{subtitle}</Subtitle>
      </TextWrapper>
      <QuantityField onChange={onChange} quantity={quantity} />
    </Wrapper>
  )
}

PricingBox.propTypes = {
  onChange: func.isRequired,
  quantity: number,
  title: string,
  subtitle: string,
}

PricingBox.defaultProps = {
  quantity: 0,
  title: '',
  subtitle: '',
}

export default PricingBox;
