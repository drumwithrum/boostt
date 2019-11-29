import styled from 'styled-components';
import colors from '../../config/colors';
import Typography from '../Typography';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`

export const Title = styled(Typography)`
  text-transform: none;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${colors.tabTitle};
`
export const Subtitle = styled(Typography)`
  text-transform: none;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: ${colors.disabled};
`
