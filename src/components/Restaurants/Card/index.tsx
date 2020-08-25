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
  RestaurantInfo,
  TextWrapper,
} from './styles';

interface IRestaurant {
  img: string;
  name: string;
}

const Card: React.FC<IRestaurant> = ({ img, name }) => {
  return (
    <Container>
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
          </RestaurantInfoContainer>
        </RestaurantSpec>
      </RestaurantItem>
    </Container>
  );
};

export default Card;
