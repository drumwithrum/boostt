import styled from 'styled-components';
import Typography from '../Typography';
import colors from '../../config/colors'

export const Wrapper = styled('div')`

`;

export const Title = styled(Typography)`
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`;

export const Subtitle = styled(Typography)`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.main};
  height: 36px;
  display: flex;
  align-items: center;
`;

export const Hint = styled(Typography)`
  color: ${colors.hint};
  font-size: 10px;
  line-height: 12px;
  height: 18px;
  display: flex;
  align-items: center;
`
