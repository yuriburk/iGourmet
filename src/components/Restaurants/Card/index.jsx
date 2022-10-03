import React from 'react';

import {
  Container,
  RestaurantItem,
  RestaurantImage,
  RestaurantSpec,
  RestaurantTitle,
  RestaurantInfoContainer,
  ScoreIcon,
  ScoreInfo,
  Separator,
  RestaurantInfo,
  RestaurantAddress,
  TextWrapper,
} from './styles';

const Card = ({ id, img, name }) => {
  return (
    <Container href={`/restaurante?restaurant=${id}`}>
      <RestaurantItem>
        <RestaurantImage src={img} alt={name} />
        <RestaurantSpec>
          <TextWrapper>
            <RestaurantTitle>{name}</RestaurantTitle>
          </TextWrapper>
          <RestaurantInfoContainer>
            <ScoreIcon />
            <ScoreInfo>5.0</ScoreInfo>
            <RestaurantInfo>Pizza</RestaurantInfo>
            <Separator />
            <RestaurantAddress>2.3 km</RestaurantAddress>
          </RestaurantInfoContainer>
        </RestaurantSpec>
      </RestaurantItem>
    </Container>
  );
};

export default Card;
