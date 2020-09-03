import React from 'react';

import Presentation from '../Presentation';
import Card from './Card';
import { IRestaurants, IRestaurant } from '../../models/global';
import { Container, ItemsContainer, NoData } from './styles';

const Restaurants: React.FC<IRestaurants> = ({
  filter,
  restaurants,
  title,
}) => {
  function isInFilter(value: IRestaurant) {
    return value.categories === filter;
  }

  if (filter) restaurants = restaurants.filter(isInFilter);

  return (
    <Container>
      <Presentation title={title} />
      {restaurants &&
        restaurants.map((Restaurant: IRestaurant, index: number) => (
          <ItemsContainer key={index}>
            <Card name={Restaurant.name} img={Restaurant.img} />
          </ItemsContainer>
        ))}
      {restaurants.length === 0 && <NoData>Sem Registros :(</NoData>}
    </Container>
  );
};

export default Restaurants;
