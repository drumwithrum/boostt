import styled from 'styled-components';
import colors from '../../config/colors';

export const Base = styled('div')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  color: ${p => p.color || colors.black};
  text-transform: uppercase;
  white-space: pre-wrap;
`

export const Hint = styled(Base)`
  color: ${p => p.color || colors.hint};
  font-size: 10px;
  line-height: 12px;
`
export const Title = styled(Base)`
  font-size: 24px;
  line-height: 29px;
  color: ${p => p.color || colors.black};

`
export const Subtitle = styled(Base)`
  font-size: 18px;
  line-height: 22px;
  color: ${p => p.color || colors.main};
`
