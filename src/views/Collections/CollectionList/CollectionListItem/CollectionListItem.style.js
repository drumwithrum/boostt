import styled from 'styled-components';

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

export const Typography = styled('div')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #FF473A;
  white-space: pre-wrap;
  text-transform: uppercase;
  margin-top: 6px;
  height: 32px;
`
