import React, { useState } from 'react';
import { bool, string } from 'prop-types';
import { Wrapper, Content } from './View.style';
import { AppBar, Drawer } from '../';

const View = ({ isDrawerOpen: drawerOpen, children, hideAppBar, title, ...props }) => {
  const [isDrawerOpen, setDrawerState] = useState(false);
  const toggleDrawer = () => setDrawerState(!isDrawerOpen);
  const isOpen = isDrawerOpen || drawerOpen;
  return (
    <Wrapper active={!hideAppBar}>
      {!hideAppBar && <AppBar onClick={toggleDrawer} isMenuOpen={isDrawerOpen} title={title} />}
      <Drawer open={isOpen} onClose={toggleDrawer} />
      <Content moveContent={isOpen} {...props}>
        {children}
      </Content>
    </Wrapper>
  )
}

View.propTypes = {
  hideAppBar: bool,
  isDrawerOpen: bool,
  title: string,
}

View.defaultProps = {
  hideAppBar: false,
  isDrawerOpen: false,
  title: '',
}

export default View;
