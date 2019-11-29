import React from 'react';
import { number, string, arrayOf, func } from 'prop-types';
import { Stepper, Layout, ActiveStep, Wrapper, TabsWrapper, Tab } from './Tabs.style';

const Tabs = ({ activeTab, onTabClick, titles, ...props }) => (
  <Wrapper>
    <TabsWrapper>
      {titles.map((item, index) => (
        <Tab key={`tab-item-${item}`} itemsAmount={titles.length} isActive={activeTab === index} onClick={() => onTabClick(index)}>
          {item}
        </Tab>
      ))}
    </TabsWrapper>
    <Stepper {...props }>
      <Layout />
      <ActiveStep activeTab={activeTab} itemsAmount={titles.length} />
    </Stepper>
  </Wrapper>
)


Tabs.propTypes = {
  titles: arrayOf(string).isRequired,
  activeTab: number,
  onTabClick: func.isRequired,
}

Tabs.defaultProps = {
  activeTab: 0,
}


export default Tabs;
