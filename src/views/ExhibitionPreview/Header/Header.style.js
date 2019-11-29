import styled from 'styled-components';
import { Typography } from '../../../components';
import colors from '../../../config/colors';


export const Wrapper = styled('div')`
  width: 100%;
  position: relative;
  min-height: 20px;
`;
export const Spacer = styled('div')`
  width: calc(100% - 10px);
  height: 1px;
  position: absolute;
  bottom: 0px;
  left: 5px;
  background-color: ${colors.disabled};
`;
export const TitleWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18px;
  transition: all .3s;
  margin-bottom: ${p => p.expanded ? '10px' : '0px'};
`;
export const Title = styled(Typography)`
  font-size: 10px;
  line-height: 12px;
`;
export const Icon = styled('img')`
  transform: ${p => p.expanded ? 'rotateZ(180deg)' : 'rotateZ(0deg)'};
  transition: all .3s;
`;
export const Description = styled(Typography)`
  font-size: 10px;
  margin-top: 10px;
  line-height: 15px;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 10px;
  text-transform: none;
`;

