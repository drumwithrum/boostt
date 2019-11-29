import styled from 'styled-components';
import { Typography as TypographyBase } from '../../../../components';
import colors from '../../../../config/colors';

export const Wrapper = styled('div')`
  width: 100%;
`;

export const Thumbnail = styled('div')`
  width: 100%;
  height: 124px;
  background-image: url('${p => p.src}');
  background-size: cover;
  background-position: center center;
`

export const Typography = styled(TypographyBase)`
  text-transform: none;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.main};
  white-space: pre-wrap;
  text-transform: uppercase;
  margin-top: 6px;
  height: 32px;
`
