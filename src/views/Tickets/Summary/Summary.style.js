import styled from 'styled-components';
import { Typography } from '../../../components';
import colors from '../../../config/colors';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Bar = styled('div')`
  width: 100%;
  height: 2px;
  position: relative;
`;
export const LayoutBar = styled('div')`
  width: 100%;
  height: 100%;
  background-color: ${colors.disabled};
  position: absolute;
  top: 0;
  z-index: 99;
`;
export const ColorBar = styled('div')`
  width: ${p =>p.active ? '100%' : '0%'};
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  transition: all .35s;
  background-color: ${colors.main};
  left: ${p => p.active ? '0%' : '50%'};
  transform: ${p => p.active ? 'translateX(0%)' : 'translateX(-50%)'};
`;


export const Title = styled(Typography)`
  font-size: 18px;
  line-height: 22px;
  color: ${p => p.active ? colors.black : colors.disabled};
  text-transform: none;
  transition: .35s all;
`
export const Content = styled(Typography)`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 16px;
  margin-top: 4px;
`
