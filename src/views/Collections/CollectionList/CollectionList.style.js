import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Row = styled('div')`
  width: 100%;
`;
export const Cell = styled('div')`
  box-sizing: border-box;
  flex-basis: 50%;
  flex-shrink: 0;
  margin-bottom: 6px;
  &:nth-child(2n + 1) {
    padding-right: 9px;
  }
  &:nth-child(2n) {
    padding-left: 9px;
  }
`

