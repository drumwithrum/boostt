import styled from 'styled-components';
import { ExpandPanel as ExpandPanelBase, Button as ButtonBase } from '../../../components';
import colors from '../../../config/colors';

export const Wrapper = styled('div')`
  width: 100%;
  padding-bottom: 22px;
  position:relative;
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`;

export const Title = styled('div')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 20px;
`;

export const Content = styled('div')`
  width: 100%;
`

export const ExpandPanel = styled(ExpandPanelBase)`
  padding-right: 20px;
`
export const Button = styled(ButtonBase)`
  width: 248px;
`
export const Description = styled('div')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  color: #979797;
  height: 100%;
`
export const PriceWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`
export const PriceTitle = styled('div')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #050505;
`
export const PriceSubtitle = styled('div')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #D4D4D4;
`
export const ExpandIcon = styled('img')`
  position: absolute;
  right: 5px;
  bottom: 3px;
  transform: ${p => p.expanded ? 'rotateX(180deg)' : 'rotateX(0deg)'};
  transition: all .5s;
`
export const ButtonWrapper = styled('div')`
  display:flex;
  justify-content: center;
  margin-top: 10px;
`
export const OrderPanel = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 0px 12px 0px;
`
export const Spacer = styled('div')`
  position: absolute;
  bottom: 0;
  width: calc(100% - 10px);
  height: 1px;
  background-color: ${colors.disabled};
  left: 5px;
`
