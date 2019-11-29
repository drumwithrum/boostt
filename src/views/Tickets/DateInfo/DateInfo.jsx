import React from 'react';
import { Wrapper, Title } from './DateInfo.style';
import { QuantityField } from '../../../components';
import colors from '../../../config/colors';
import { string } from 'prop-types';

const DateInfo = ({ title, subtitle,...props }) => {
  return (
    <Wrapper {...props}>
      <Title>{title}</Title>
      <Title>{subtitle}</Title>
    </Wrapper>
  )
}

DateInfo.propTypes = {
  title: string.isRequired,
  subtitle: string,
}

DateInfo.defaultProps = {
  subtitle: '',
}

export default DateInfo;
