import styled from 'styled-components';

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
  color: ${p => p.color || '#000'};
  background-color: ${p => p.backgroundColor || '#FFF'};
  border: 2px solid ${p => p.color || '#000'};
  &::placeholder {
    color: ${p => p.color || '#000'};
  }
`;

export const Icon = styled('img')`
  position: absolute;
  right: 6px;
`
