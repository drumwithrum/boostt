import styled from 'styled-components';

const itemHeight = 300

export const Wrapper = styled('div')`
  width: calc(100% + 8px);
  margin-left: -4px;
`;

export const GalleryItem = styled('div')`
  width: 100%;
  height: ${itemHeight}px;
  background-size: cover;
  background-image: url('${p => p.src}');
  background-position: center center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: visible;
  outline: none;
`
export const GalleryItemWrapper = styled('div')`
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  box-sizing: border-box;
  height: ${itemHeight + 10}px;
`
export const StepperWrapper = styled('div')`
`
