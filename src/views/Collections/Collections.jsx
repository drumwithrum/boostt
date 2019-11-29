import React, { useState } from 'react';
import CollectionList from './CollectionList';
import Search from './Search';
import images from './images';
import { Wrapper, Content } from './Collections.style';

const items = [{
  title: 'Decorative\narts & crafts',
  img: images.decorative,
},
{
  title: 'american\nimpressionism',
  img: images.american,
},
{
  title: 'de stijl',
  img: images.destijl,
},
{
  title: 'cubism',
  img: images.cubism,
},
{
  title: 'american photography',
  img: images.americanPhotography,
},
{
  title: 'greek antiques',
  img: images.greek,
},
{
  title: 'Zdzisław Beksiński',
  img: images.beksinski,
},
{
  title: 'Alphonse Mucha',
  img: images.mucha,
}]

const Collections = ({...props }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  return(
    <Wrapper>
      <Search value={searchValue} onChange={setSearchValue} />
      <Content>
        <CollectionList items={filteredItems} />
      </Content>
    </Wrapper>
  )
}

export default Collections;
