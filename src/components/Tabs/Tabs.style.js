import styled from 'styled-components';

export const Wrapper = styled('div')`
  width: 100%;
  position: relative;
`;
export const TabsWrapper = styled('div')`
  width: 100%;
  display: flex;
`;
export const Stepper = styled('div')`
  width: 100%;
  height: 3px;
  position: relative;
`;
export const Layout = styled('div')`
  height: 66.6666%;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: #F4F5F2;
`
export const ActiveStep = styled('div')`
  position: absolute;
  bottom: 0px;
  height: 3px;
  background-color: #FF473A;
  width: ${p => 100 / p.itemsAmount}%;
  left: ${p => 100 / p.itemsAmount * p.activeTab}%;
  transition: all .3s;
`

export const Tab = styled('div')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  width: ${p => 100 / p.itemsAmount}%;
  transition: all .3s;
  display: flex;
  justify-content: center;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: ${p => p.isActive ? '#12px' : '6px'};
  color: ${p => p.isActive ? '#050505' : '#D4D4D4'};
  text-decoration: ${p => p.isActive ? 'underline' : 'none'};
`

