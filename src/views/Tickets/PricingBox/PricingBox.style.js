import styled from 'styled-components';
import { Typography } from '../../../components';

export const TextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  font-size: 18px;
  line-height: 22px;
  text-transform: none;
`
export const Subtitle = styled(Typography)`
  font-size: 11px;
  line-height: 13px;
`
export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 28px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  width: 100%;
`
