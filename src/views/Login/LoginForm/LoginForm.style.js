import styled from 'styled-components';
import { Button } from '../../../components';

export const Wrapper = styled('div')`
  width: 100%;
`;

export const Typography = styled('div')`
  font-family: Montserrat;
  color: #FCFCFC;
  font-weight: 300;
  font-style: normal;
`

export const Title = styled(Typography)`
  text-transform: uppercase;
  white-space: pre-wrap;
  font-size: 36px;
  line-height: 44px;
  height: 150px;
`;

export const Hint = styled(Typography)`
  font-size: 10px;
  line-height: 12px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: ${p => p.justify || 'flex-start'};
`
export const Subtitle = styled(Typography)`
  white-space: pre-wrap;
  font-size: 12px;
  line-height: 15px;
`
export const InputWrapper = styled('div')`
  margin-top: 20px;
  margin-bottom: 27px;
`

export const InfoWrapper = styled('div')`
  padding-left: 5px;
`

export const LoginButton = styled(Button)`
  margin-bottom: 5px;
`
