import React, { useState } from 'react';
import Carousel  from 'nuka-carousel';
import { Wrapper, GalleryItem, StepperWrapper, GalleryItemWrapper } from './Gallery.style';
import { DotsStepper } from '../../../../components';
import { arrayOf, string } from 'prop-types';

const carouselSettings = {
  withoutControls: true,
  slidesToShow: 1,
}

const Gallery = ({ images, ...props }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Wrapper>
      <Carousel {...carouselSettings} afterSlide={index => setSlideIndex(index)} slideIndex={slideIndex}>
        {images.map((image, index) => (
          <GalleryItemWrapper key={`gallery-item-${index}`}>
            <GalleryItem src={image} />
          </GalleryItemWrapper>
        ))}
      </Carousel>
      <StepperWrapper>
        <DotsStepper activeItem={slideIndex} items={images} />
      </StepperWrapper>
    </Wrapper>
  )
}

Gallery.propTypes = {
  images: arrayOf(string).isRequired,
}

Gallery.defaultProps = {
  images: ['https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg'],
}

export default Gallery;
