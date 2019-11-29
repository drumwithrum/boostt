import styled from 'styled-components';

export const Wrapper = styled('div')`
  max-height: ${p => p.expanded ? '800px' : `${p.height}px`};
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  transition-timing-function: linear;
  transition: all .65s;
`;
