import React from 'react';
import { string } from 'prop-types';
import { Wrapper, Thumbnail, Typography } from './CollectionListItem.style';

const CollectionListItem = ({ img, title, ...props }) => (
  <Wrapper {...props }>
    <Thumbnail src={img} />
    <Typography>{title}</Typography>
  </Wrapper>
)

CollectionListItem.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
}

CollectionListItem.defaultProps = {
}

export default CollectionListItem;
