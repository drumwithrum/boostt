import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Wrapper = styled(Grid)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: ${p => p.displaypadding ? '60px' : '0px'};
  background-color: #FCFCFC;
`;

export const Content = styled('main')`
  transform: ${p => p.moveContent ? 'translateX(333px)' : 'translateX(0px)'};
  display: flex;
  width: 100%;
  transition: all .225s;
  box-sizing: border-box;
  overflow: scroll;
  overflow-x: hidden;
`
