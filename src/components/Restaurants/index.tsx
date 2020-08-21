import React from 'react';

import {
  Container,
  PresentationContainer,
  Title,
  MoreContainer,
  MoreTitle,
  Icon,
  RestaurantCarousel,
  RestaurantItemContainer,
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

interface IMore {
  title: string;
  link: string;
}

interface IRestaurants {
  restaurants: IRestaurant[];
  title: string;
  more: IMore;
}

const Restaurants: React.FC<IRestaurants> = ({ restaurants, title, more }) => {
  return (
    <Container>
      <PresentationContainer>
        <Title>{title}</Title>
        <MoreContainer href={more.link}>
          <MoreTitle>{more.title}</MoreTitle>
          <Icon />
        </MoreContainer>
      </PresentationContainer>
      <RestaurantCarousel>
        {restaurants.map((Restaurant: IRestaurant, index: number) => (
          <RestaurantItemContainer key={index}>
            <RestaurantItem>
              <RestaurantImage src={Restaurant.img} alt={Restaurant.name} />
              <RestaurantSpec>
                <TextWrapper>
                  <RestaurantTitle>{Restaurant.name}</RestaurantTitle>
                </TextWrapper>
                <RestaurantInfoContainer>
                  <ScoreIcon />
                  <ScoreInfo>5.0</ScoreInfo>
                  <RestaurantInfo>Pizza</RestaurantInfo>
                </RestaurantInfoContainer>
              </RestaurantSpec>
            </RestaurantItem>
          </RestaurantItemContainer>
        ))}
      </RestaurantCarousel>
    </Container>
  );
};

export default Restaurants;
