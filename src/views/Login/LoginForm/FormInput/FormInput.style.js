import styled from 'styled-components';

export const InputBase = styled('input')`
  height: 42px;
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
  color: #000;
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;


