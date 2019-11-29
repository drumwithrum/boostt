import React from 'react';
import { func, object, bool } from 'prop-types';
import { Input } from '../../../';
import { Wrapper, IconContainer, TextContainer, Button } from './DrawerMenuItem.style';

const DrawerMenuItem = ({
  onItemClick,
  title,
  icon,
  input,
  header,
  button,
  ...props
}) => {
  const Content = () => (
    <>
      <IconContainer>
        <img src={icon} alt={title} />
      </IconContainer>
      <TextContainer header={header}>
        {Boolean(input)
          ? <Input {...input} />
          : title
        }
      </TextContainer>
    </>
  )
  return button
    ? (
      <Button onClick={onItemClick}>
        <Content />
      </Button>
    ) : (
      <Wrapper>
        <Content />
      </Wrapper>
    )

}

DrawerMenuItem.propTypes = {
  onItemClick: func,
  input: object,
  header: bool,
  button: bool,
}

DrawerMenuItem.defaultProps = {
  input: null,
  header: false,
  button: false,
}

export default DrawerMenuItem;
