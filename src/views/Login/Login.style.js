import styled from 'styled-components';
import { View } from '../../components';
import backgroundSrc from './images/background.png';

export const Wrapper = styled(View)`
  padding: 0px 60px 54px 64px;
  background-image: url('${backgroundSrc}');
  display: flex;
  align-items: flex-end;
  height: 100%;
`;
