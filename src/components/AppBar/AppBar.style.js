import styled from 'styled-components';
import colors from '../../config/colors'
import { Typography } from '../../components'

export const Wrapper = styled('div')`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.appBar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  z-index: 9999;
`;

export const TextLogo = styled(Typography)`
  font-size: 10px;
  line-height: 12px;
  color: ${colors.black};
  white-space: pre-wrap;
`

export const MenuIcon = styled('img')`
  width: 24px;
  height: 24px;
  margin-right: ${p => p.moved ? '8px' : 0};
  transition: all .5s;
`
export const Title = styled(Typography)`
  text-transform: none;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${colors.main};
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
`
