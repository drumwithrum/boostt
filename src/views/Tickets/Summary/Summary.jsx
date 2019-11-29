import React from 'react';
import { Wrapper, Title, Bar, LayoutBar, ColorBar, Content } from './Summary.style';
import { number, string } from 'prop-types';

const Summary = ({ quantity, title, ...props }) => {
  return (
    <Wrapper {...props}>
      <Bar>
        <LayoutBar />
        <ColorBar active={Boolean(quantity)}/>
      </Bar>
      <Content>
        <Title active={Boolean(quantity)}>{title}</Title>
        <Title active={Boolean(quantity)}>{`$${quantity}`}</Title>
      </Content>
    </Wrapper>
  )
}

Summary.propTypes = {
  quantity: number,
  title: string,
}

Summary.defaultProps = {
  quantity: 0,
  title: '',
}

export default Summary;
