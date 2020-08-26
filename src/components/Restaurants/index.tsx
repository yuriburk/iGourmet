import React from 'react';

import Presentation from '../Presentation';
import Card from './Card';
import { IRestaurants, IRestaurant } from '../../models/global';
import { Container, ItemsContainer } from './styles';

const Restaurants: React.FC<IRestaurants> = ({ restaurants, title }) => {
  return (
    <Container>
      <Presentation title={title} />
      {restaurants.map((Restaurant: IRestaurant, index: number) => (
        <ItemsContainer key={index}>
          <Card name={Restaurant.name} img={Restaurant.img} />
        </ItemsContainer>
      ))}
    </Container>
  );
};

export default Restaurants;
