import React from 'react';
import { func, bool } from 'prop-types';
import DrawerMenu from './DrawerMenu';
import { DrawerBase, Content } from './Drawer.style';

const Drawer = ({
  children,
  open,
  onClose,
  ...props
}) => (
  <DrawerBase
    variant="persistent"
    anchor="left"
    open={open}
    // onClose={onClose}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}
    {...props}
  >
    <Content>
      <DrawerMenu />
    </Content>
  </DrawerBase>
)

Drawer.propTypes = {
  open: bool,
  onClose: func,
}

Drawer.defaultProps = {
  open: false,
}

export default Drawer;
