import React from 'react';
import ShopItem from './ShopItem';
import { Wrapper } from './Shop.style';

const items = [{
  id: 'items-1',
  title: 'Braun Classic Watch',
  description: `This Braun watch is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.`,
  price: {
    all: 160,
    member: 140,
  },
  images: [
    'https://2.allegroimg.com/original/0c2326/efcd2e1648f489c87777600c85e2',
    'https://radiozet-static.hitraff.pl/uploads/productfeeds/images/33/6b/skagen-skagen-signatur-zegarek-braun.jpg',
  ],
}, {
  id: 'items-2',
  title: 'Keychains',
  description: `This Keychain is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.`,
  price: {
    all: 5,
  },
  images: [
    'https://ffstatic.pl/philippi/philippi-brelok-philippi-wyscigowka__273032-b-s2500x2500.jpg',
    'https://7.allegroimg.com/s512/039623/5be165cb4d3db0ca741591e4fad7/BRELOK-BRELOCZEK-breloki-serce-sklejka-do-kluczy',
    'https://image.ceneostatic.pl/data/products/47128728/i-brelok-playstation-w-ksztalcie-kontrolera.jpg',
  ],
}]

const Shop = ({...props }) => (
  <Wrapper>
    {items.map((item, index) => <ShopItem data={item} key={`shop-item-${item.id}`} spacer={index < items.length - 1} />)}
  </Wrapper>
)

export default Shop;
