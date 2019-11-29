import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import colors from '../../config/colors'

export const DrawerBase = styled(Drawer)`
  & > div {
    overflow: visible;
    z-index: 99999;
    background: none;
  }
`;
export const Content = styled('div')`
  width: 310px;
  height: 100%;
  background-color: ${colors.main};
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
`
