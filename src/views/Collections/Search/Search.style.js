import styled from 'styled-components';
import { Input as BaseInput } from '../../../components';

export const Input = styled(BaseInput)`
  height: 48px;
`

export const Wrapper = styled('div')`
  width: 100%;
  margin-bottom: 9px;
  box-sizing: border-box;
  padding-top: 12px;
  padding-bottom: 3px;
`;

export const Link = styled('a')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: underline;
  color: #FF473A;
  &:visited {
    color: #FF473A;
  }
`
