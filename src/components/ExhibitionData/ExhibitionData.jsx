import React from 'react';
import { string, number, func } from 'prop-types';
import { Wrapper, Title, Subtitle, Hint } from './ExhibitionData.style';

const ExhibitionData = ({
  type,
  title,
  floor,
  subtitle,
  onClick,
  ...props
}) => (
  <Wrapper onClick={onClick}>
    {type && <Hint>{type}</Hint>}
    {title && <Title>{title}</Title>}
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {floor && <Hint>{`Floor: ${floor}`}</Hint>}
  </Wrapper>
)

ExhibitionData.propTypes = {
  title: string,
  subtitle: string,
  floor: number,
  type: string,
  onClick: func,
}

ExhibitionData.defaultProps = {
  title: '',
  subtitle: '',
  floor: '',
  type: '',
}

export default ExhibitionData;
