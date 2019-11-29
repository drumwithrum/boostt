import React from 'react';
import { Base, Title, Subtitle, Hint } from './Typography.style';
import { string, oneOf } from 'prop-types';

const Typography = ({children, type, color,...props }) => {
    if (type === 'title') return (
      <Title color={color} {...props}>
        {children}
      </Title>
    )
    if (type === 'subtitle') return (
      <Subtitle color={color} {...props}>
        {children}
      </Subtitle>
    )
    if (type === 'hint') return (
      <Hint color={color} {...props}>
        {children}
      </Hint>
    )
  return (
    <Base color={color} {...props}>
      {children}
    </Base>
  )
}

Typography.propTypes = {
  color: string,
  type: oneOf(['title', 'subtitle', 'hint', 'base']),
}

Typography.defaultProps = {
  color: '',
  type: 'base',
}

export default Typography;
