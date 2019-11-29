import React, { useState } from 'react';
import Gallery from './Gallery';
import { string, arrayOf, shape, number, bool } from 'prop-types';
import { QuantityField } from '../../../components';
import arrowIcon from './images/arrow.svg';
import {
  Wrapper,
  Title,
  Description,
  Content,
  PriceWrapper,
  ExpandPanel,
  ExpandIcon,
  Button,
  ButtonWrapper,
  PriceSubtitle,
  PriceTitle,
  OrderPanel,
  Spacer,
} from './ShopItem.style';

const ShopItem = ({
  data: {
    title,
    description,
    price: { member: memberPrice, all: normalPrice },
    images,
  },
  quantity,
  spacer,
  ...props
}) => {
  const [isPanelExpanded, setExpansionState] = useState(false);
  const [itemQuantity, setQuantity] = useState(quantity);
  const onExpandClick = () => setExpansionState(!isPanelExpanded);
  return (
    <Wrapper>
      <Gallery images={images} />
      <Content>
        <Title>{title}</Title>
        <ExpandPanel height={72} expanded={isPanelExpanded}>
          <Description>{description}</Description>
          <ExpandIcon src={arrowIcon} alt="expand icon" onClick={onExpandClick} expanded={isPanelExpanded} />
        </ExpandPanel>
        <OrderPanel>
          <PriceWrapper>
            <PriceTitle>{`$${normalPrice.toFixed(2)}`}</PriceTitle>
            {memberPrice && <PriceSubtitle>{`$${memberPrice.toFixed(2)} Member Price`}</PriceSubtitle>}
          </PriceWrapper>
          <QuantityField quantity={itemQuantity} onChange={setQuantity} />
        </OrderPanel>
      </Content>
      <ButtonWrapper>
        <Button>Add to Cart</Button>
      </ButtonWrapper>
      {spacer && <Spacer />}
    </Wrapper>
  );
}

ShopItem.propTypes = {
  data: shape({
    title: string,
    description: string,
    price: shape({
      all: number.isRequired,
      member: number,
    }),
    images: arrayOf(string),
  }).isRequired,
  quantity: number,
  spacer: bool,
}

ShopItem.defaultProps = {
  quantity: 0,
}

export default ShopItem;
