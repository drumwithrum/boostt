import React from 'react';
import { bool, number } from 'prop-types';
import { Wrapper } from './ExpandPanel.style';

const ExpandPanel = ({ expanded, children, ...props }) => (
  <Wrapper {...props } expanded={expanded}>
    {children}
  </Wrapper>
)


ExpandPanel.propTypes = {
  expanded: bool,
  height: number.isRequired,
}

ExpandPanel.defaultProps = {
  expanded: false,
}


export default ExpandPanel;
