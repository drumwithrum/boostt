import styled from 'styled-components';
import colors from '../../config/colors'

export const Wrapper = styled('div')`
  height: 42px;
  width: 100%;
  position: relative;
`

export const InputBase = styled('input')`
  height: 100%;
  width: 100%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  padding: 0px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  color: ${p => p.color || colors.black};
  background-color: ${p => p.backgroundColor || colors.white};
  border: 2px solid ${p => p.color || colors.black};
  &::placeholder {
    color: ${p => p.color || colors.black};
  }
`;

export const Icon = styled('img')`
  position: absolute;
  right: 6px;
`
