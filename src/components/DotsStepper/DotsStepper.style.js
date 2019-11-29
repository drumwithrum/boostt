import styled from 'styled-components';
import colors from '../../config/colors'

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  padding-bottom: 8px;
`;

export const StepperItem = styled('div')`
  width: 6px;
  height: 6px;
  border-radius: 100px;
  transition: all .225s;
  background-color: ${p => p.active ? colors.main : colors.stepperDisabled};
  &:not(:last-child) {
    margin-right: 2px;
  }
  &:not(:first-child) {
    margin-left: 2px;
  }
`
