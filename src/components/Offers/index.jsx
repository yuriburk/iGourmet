import React from 'react';

import Presentation from '../Presentation';
import {
  Container,
  OfferCarousel,
  OfferItemContainer,
  OfferItem,
  OfferImage,
  OfferSpec,
  OfferTitle,
  RestaurantTitle,
  OfferInfoContainer,
  OfferPriceInfo,
  OldPriceInfo,
  TextWrapper,
} from './styles';

const Offers = ({ offers, title, link }) => {
  return (
    <Container>
      <Presentation title={title} link={link} />
      <OfferCarousel>
        {offers.map((Offer, index) => (
          <OfferItemContainer key={index}>
            <OfferItem>
              <OfferImage src={Offer.img} alt={Offer.offer_name} />
              <OfferSpec>
                <TextWrapper>
                  <OfferTitle>{Offer.offer_name}</OfferTitle>
                </TextWrapper>
                <TextWrapper>
                  <RestaurantTitle>{Offer.restaurant_name}</RestaurantTitle>
                </TextWrapper>
                <OfferInfoContainer>
                  <OfferPriceInfo>R${Offer.offer_price}</OfferPriceInfo>
                  <OldPriceInfo>R${Offer.old_price}</OldPriceInfo>
                </OfferInfoContainer>
              </OfferSpec>
            </OfferItem>
          </OfferItemContainer>
        ))}
      </OfferCarousel>
    </Container>
  );
};

export default Offers;