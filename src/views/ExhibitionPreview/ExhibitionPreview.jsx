import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import { ExhibitionData } from '../../components';
import { date, shape, string, number, arrayOf, bool, func } from 'prop-types';
import { getFormattedDate } from '../../config/dateManager';
import { Wrapper, Button, ButtonWrapper } from './ExhibitionPreview.style';

const ExhibitionPreview = ({ data: { title, type, from, to, floor }, images, headers, isDrawerOpen, onClose, ...props }) => (
  <Wrapper title="Exhibition Preview">
    <ExhibitionData
      title={title}
      type={type}
      subtitle={`${getFormattedDate(from)} - ${getFormattedDate(to)}`}
      floor={floor}
    />
    <Gallery images={images} />
    {headers.map((item, index) => <Header data={item} key={`exhibition-${index}`} />)}
    <ButtonWrapper>
      <Button onClick={onClose}>Back</Button>
    </ButtonWrapper>
  </Wrapper>
)

ExhibitionPreview.propTypes = {
  data: shape({
    title: string,
    type: string,
    addressLine1: string,
    addressLine2: string,
    to: date,
    from: date,
    timeTo: date,
    timeFrom: date,
    floor: number,
  }),
  images: arrayOf(shape({
    title: string,
    src: string,
    type: string,
    year: string,
  })).isRequired,
  headers: arrayOf(shape({
    title: string,
    description: string,
  })),
  onClose: func.isRequired,
  isDrawerOpen: bool,
}

ExhibitionPreview.defaultProps = {
  isDrawerOpen: false,
  headers: [],
}

export default ExhibitionPreview;
