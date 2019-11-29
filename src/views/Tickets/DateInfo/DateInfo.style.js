import styled from 'styled-components';
import { Typography } from '../../../components';
import colors from '../../../config/colors';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 35px;
  margin-top: 4px;
`

export const Title = styled(Typography)`
  font-size: 12px;
  line-height: 15px;
  text-transform: none;
`
