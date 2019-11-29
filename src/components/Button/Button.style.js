import styled, { keyframes } from 'styled-components';

export const ButtonBase = styled('button')`
  width: 100%;
  height: 42px;
  background:  #FF473A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat';
  border: none;
  outline: none;
  color: #FFF;
  font-size: 12px;
  line-height: 15px;
  position: relative;
  overflow: hidden;
`;

const ripple = keyframes`
  to {
    transform: scale(2.5);
    opacity: 0;
  }
`

export const Ripple = styled('div')`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  transform: scale(0);
  animation: ${ripple} 0.6s linear;
`;
