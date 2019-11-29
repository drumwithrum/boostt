import styled from 'styled-components';
import { View, Button as BaseButton, Typography } from '../../components';
import colors from '../../config/colors';

export const Wrapper = styled(View)`
  padding-left: 13px;
  padding-right: 13px;
  display: flex;
  align-items: center;
  padding-top: 12px;
  box-sizing: border-box;
  padding-bottom: 24px;
  overflow: scroll;
  flex-wrap: wrap;
  height: 100%;
`;

export const Title = styled(Typography)`
  text-transform: none;;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: ${colors.black};
  width: 275px;
`
export const TitleWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Subtitle = styled(Typography)`
  text-transform: none;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: ${colors.main};
  width: 275px;
  padding: 3px 0px 3px 0px;
  margin-bottom: 12px;
`
export const PricingsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 54px 0px 54px 0px;
  width: 100%;
`
export const Button = styled(BaseButton)`
  width: 248px;
  align-self: center;
  margin-top: 38px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
