import styled from 'styled-components';
import { Typography } from '../../../components';

const itemHeight = 248;

const getZIndex = (index, current) => {
  const baseZIndex = 999;
  if (index === current) return baseZIndex;
  if (index < current) return baseZIndex - current + index;
  return baseZIndex - index + current;
}

const getItemStyle = (index, current, max, scrollPercent) => {
  const currentScroll = current / max;
  const posX = (currentScroll - scrollPercent) * 100;
  const zIndex = getZIndex(index, current);
  const baseTranslate = -50;
  const translateX = index === current
    ? baseTranslate + posX
    : baseTranslate + (index - current) * 5.5;
  const scale = 1 - Math.abs(current - index) * 0.07;
  return `
    z-index: ${zIndex};
    left: 50%;
    transform: translateX(${translateX}%) scale(${scale});
  `
}

export const Wrapper = styled('div')`
  width: 100%;
`;
export const TitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 42px;
  margin-bottom: 6px;
`
export const GalleryScrollWrapper = styled('div')`
  height: ${itemHeight}px;
  overflow: auto;
  white-space: nowrap;
  margin-bottom: 8px;
  position: relative;
  z-index: 9999;
`
export const GalleryWrapper = styled('div')`
  height: ${itemHeight}px;
  white-space: nowrap;
  margin-bottom: 8px;
  position: relative;
`
export const Title = styled(Typography)`
  font-weight: 300;
  font-size: 8px;
  line-height: 10px;
  text-transform: none;
`
export const GalleryItem = styled('div')`
  width: 324px;
  height: ${itemHeight}px;
  background-size: cover;
  background-image: url('${p => p.src}');
  background-position: center center;
  overflow: visible;
  outline: none;
  position: absolute;
  transition: all .3s;
  ${p => getItemStyle(p.index, p.current, p.max, p.scrollPercent)}
`
export const GalleryScrollItem = styled('div')`
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  box-sizing: border-box;
  height: ${itemHeight + 10}px;
  display: inline-block;
`
export const GalleryItemsWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  box-sizing: border-box;
  height: ${itemHeight + 10}px;
  display: inline-block;
`
