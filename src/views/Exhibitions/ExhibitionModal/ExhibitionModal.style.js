import styled from 'styled-components';

export const Wrapper = styled('div')`
  top: 0;
  left: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  transform:  ${p => p.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform .6s;
  z-index: 99999;
`;
