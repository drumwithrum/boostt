import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import CollectionListItem from './CollectionListItem';
import { Wrapper, Cell } from './CollectionList.style';

const CollectionList = ({ items,...props }) => (
  <Wrapper>
    {items.map(({title, img }, index) => (
      <Cell>
        <CollectionListItem title={title} img={img} key={`collection-item-${index}`} />
      </Cell>
    ))}
  </Wrapper>
)

CollectionList.propTypes = {
  items: arrayOf(shape({
    title: string,
    img: string,
  }))
}

CollectionList.defaultProps = {
}

export default CollectionList;
