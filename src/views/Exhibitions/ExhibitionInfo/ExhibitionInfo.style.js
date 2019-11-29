import styled from 'styled-components';
import { Button as ButtonBase } from '../../../components';

export const Wrapper = styled('div')`
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 60px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Footer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 30px;
`

export const Content = styled('div')`
  padding-left: 13px;
  padding-right: 13px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
`
export const Thumbnail = styled('div')`
  width: 100%;
  height: 250px;
  background-image: ${p => p.src ? `url('${p.src}')` : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`

export const Button = styled(ButtonBase)`
  margin-top: 50px;
  width: 250px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`
