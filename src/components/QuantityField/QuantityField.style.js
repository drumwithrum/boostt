import styled from 'styled-components';
import Typography from '../Typography';
import colors from '../../config/colors';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
`;

export const QuantityText = styled(Typography)`
  display: flex;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${p => p.active ? colors.black : colors.disabled};
  text-decoration: ${p => p.active ? 'underline' : 'none'};
  margin: 0px 8px 0px 8px;
  min-width: 20px;
  justify-content: center;
  transition: all .3s;
`;
