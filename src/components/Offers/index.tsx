import React from 'react';

import {
  Container,
  PresentationContainer,
  Title,
  MoreContainer,
  MoreTitle,
  Icon,
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

interface IOffer {
  img: string;
  offer_name: string;
  restaurant_name: string;
  old_price: string;
  offer_price: string;
}

interface IMore {
  title: string;
  link: string;
}

interface IOffers {
  offers: Array<IOffer>;
  title: string;
  more: IMore;
}

const Offers: React.FC<IOffers> = ({ offers, title, more }) => {
  return (
    <Container>
      <PresentationContainer>
        <Title>{title}</Title>
        <MoreContainer href={more.link}>
          <MoreTitle>{more.title}</MoreTitle>
          <Icon />
        </MoreContainer>
      </PresentationContainer>
      <OfferCarousel>
        {offers.map((Offer: IOffer, index: number) => (
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