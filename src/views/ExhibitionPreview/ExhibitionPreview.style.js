import styled from 'styled-components';
import { View, Button as BaseButton } from '../../components';

export const Wrapper = styled(View)`
  padding-left: 13px;
  padding-right: 13px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  z-index: 99;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 32px;
`;

export const Button = styled(BaseButton)`
  width: 248px;
  margin-top: 32px;
  align-self: center;
`;
export const ButtonWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
`;
