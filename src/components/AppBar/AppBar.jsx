import React from 'react';
import { Wrapper, TextLogo, MenuIcon, Title } from './AppBar.style';
import { func, bool, string } from 'prop-types';
import menuIconSrc from './images/menu.svg';
import { getTitle } from '../../config/router';

const AppBar = ({
  children,
  onClick,
  isMenuOpen,
  title,
  ...props
}) => (
  <Wrapper>
    <TextLogo>
      {`the\nart\nmuseum`}
    </TextLogo>
    <Title>{title || getTitle()}</Title>
    <MenuIcon moved={isMenuOpen} onClick={onClick} src={menuIconSrc} />
  </Wrapper>
)

AppBar.propTypes = {
  onClick: func,
  isMenuOpen: bool,
  title: string,
}

AppBar.defaultProps = {
  isMenuOpen: false,
  title: '',
}

export default AppBar;
