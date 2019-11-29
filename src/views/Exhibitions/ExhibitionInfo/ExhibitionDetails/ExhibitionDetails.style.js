import styled from 'styled-components';
import { Typography as TypographyBase } from '../../../../components';
import colors from '../../../../config/colors';

export const Wrapper = styled('div')`
  height: 100%;
  display: flex;
`;

export const Icon = styled('img')`
  margin-right: 12px;
`;

export const Typography = styled(TypographyBase)`
  text-transform: none;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.main};
`

export const TextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`
