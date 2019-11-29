import React from 'react';
import { Wrapper } from './TabPanel.style';

const TabPanel = ({children, index, ...props }) => (
  <Wrapper {...props}>
    {children[index]}
  </Wrapper>
)

export default TabPanel;
