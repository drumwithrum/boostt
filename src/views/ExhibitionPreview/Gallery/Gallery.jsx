import React, { useState, useRef } from 'react';
import { shape, string, arrayOf } from 'prop-types';
import { DotsStepper } from '../../../components';
import { Wrapper, TitleWrapper, GalleryWrapper, Title, GalleryScrollItem, GalleryScrollWrapper, GalleryItem,  GalleryItemsWrapper } from './Gallery.style';

const Gallery = ({ images, currentItem, ...props }) => {
  const galleryItem = useRef(null);
  const itemWidth = galleryItem.current && galleryItem.current.scrollWidth / images.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevScroll, setScroll] = useState(0);
  const [isScrolling, setScrollingState] = useState(false);
  const galleryWidth = itemWidth * images.length || 0;
  const galleryPercentage = prevScroll / galleryWidth;
  const onGalleryScroll = (item) => {
    const isMovingRight = item.scrollLeft > prevScroll;
    const isMovingLeft = item.scrollLeft < prevScroll;
    const shouldSlideAdd = item.scrollLeft >= (slideIndex * itemWidth) + itemWidth * 0.5;
    const shouldSlideRemove = item.scrollLeft + itemWidth <= (slideIndex * itemWidth) + itemWidth * 0.5;
    if (shouldSlideAdd && isMovingRight && slideIndex < images.length - 1) {
      const newSlideIndex = slideIndex + 1;
      item.scrollLeft = itemWidth * newSlideIndex;
      setSlideIndex(newSlideIndex)
    };
    if (shouldSlideRemove && isMovingLeft && slideIndex > 0) {
      const newSlideIndex = slideIndex - 1;
      item.scrollLeft = itemWidth * newSlideIndex;
      setSlideIndex(newSlideIndex)
    };
    setScroll(item.scrollLeft);
  }
  const handleScrollEnd = (item) => {
    item.scrollLeft = itemWidth * slideIndex;
    setScroll(itemWidth * slideIndex);
    setScrollingState(false);
  }
  const handleScrollStart = () => {
    setScrollingState(true);
  }
  const { title, type, year } = images[slideIndex];
  return (
    <Wrapper>
      <GalleryWrapper>
        <GalleryItemsWrapper>
          {images.map((image, index) =>
          {
            return(
            <GalleryItem key={`gallery-item-${index}`} index={index} max={images.length} current={slideIndex} src={image.src} scrollPercent={galleryPercentage} />
          )})}
        </GalleryItemsWrapper>
        <GalleryScrollWrapper
          ref={galleryItem}
          onScroll={(e) => {
            isScrolling && onGalleryScroll(galleryItem.current);
          }}
          onTouchEnd={() => handleScrollEnd(galleryItem.current)}
          onTouchStart={handleScrollStart}
        >
          {images.map((image, index) => (
            <GalleryScrollItem key={`gallery-item-${index}`} />
          ))}
        </GalleryScrollWrapper>
      </GalleryWrapper>
      <DotsStepper activeItem={slideIndex} items={images} />
      <TitleWrapper>
        <Title type="hint">{`“${title}”`}</Title>
        <Title type="hint">{type}</Title>
        <Title type="hint">{year}</Title>
      </TitleWrapper>
    </Wrapper>
  )
}

Gallery.propTypes = {
  images: arrayOf(shape({
    title: string,
    src: string,
    type: string,
    year: string,
  })).isRequired,
}

Gallery.defaultProps = {
  isDrawerOpen: false,
}

export default Gallery;
