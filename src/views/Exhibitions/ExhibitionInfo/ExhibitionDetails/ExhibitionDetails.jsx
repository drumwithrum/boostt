import React from 'react';
import { string, object } from 'prop-types';
import { Wrapper, Typography, Icon, TextWrapper } from './ExhibitionDetails.style';

const ExhibitionDetails = ({
  title,
  subtitle,
  icon,
  iconStyle,
  ...props
}) => (
  <Wrapper>
    <Icon src={icon} alt={title} style={{ ...iconStyle }}/>
    <TextWrapper>
      {title && <Typography>{title}</Typography>}
      {subtitle && <Typography>{subtitle}</Typography>}
    </TextWrapper>
  </Wrapper>
)

ExhibitionDetails.propTypes = {
  title: string,
  subtitle: string,
  icon: string,
  iconStyle: object,
}

ExhibitionDetails.defaultProps = {
  title: '',
  subtitle: '',
  icon: '',
  iconStyle: {},
}

export default ExhibitionDetails;
