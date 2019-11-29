import styled from 'styled-components';
import colors from '../../../../config/colors'
import BaseButton from '../../../Button'

const wrapperStyles = `
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
  box-shadow: none;
`;

export const Wrapper = styled('div')`
  ${wrapperStyles}
  padding-right: 25px;
  box-sizing: border-box;
`;

export const Button = styled(BaseButton)`
  ${wrapperStyles}
`;

export const IconContainer = styled('div')`
  width: 59px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled('div')`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: ${p => p.header ? '0px' : '4px'};
`;
