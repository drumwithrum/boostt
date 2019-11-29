import React, { useState } from 'react';
import { ButtonBase, Ripple } from './Button.style';

const Button = ({ children, onClick, ...props }) => {
  const initialState = []
  const [ripples, setRipples] = useState(initialState);

  const onRippleAdd = (e) => {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - (size / 2);
    const y = e.pageY - pos.y - (size / 2);
    const ripple = { position: 'absolute', top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px' };
    setRipples([...ripples, ripple]);
  }


  const handleClick = (e) => {
    onRippleAdd(e);
    onClick && onClick();
  }
  return (
    <ButtonBase onClick={handleClick} {...props}>
      {ripples.map((item, index) => <Ripple style={item} key={`riplpe-item-${index}`} />)}
      {children}
    </ButtonBase>
  )
}

export default Button;
