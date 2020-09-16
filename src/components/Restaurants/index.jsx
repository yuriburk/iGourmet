import React from 'react';

import Presentation from '../Presentation';
import Card from './Card';
import { Container, ItemsContainer, NoData } from './styles';

const Restaurants = ({
  filter,
  restaurants,
  title,
}) => {
  function isInFilter(value) {
    return value.categories === filter;
  }

  if (filter) restaurants = restaurants.filter(isInFilter);

  return (
    <Container>
      <Presentation title={title} />
      {restaurants &&
        restaurants.map((Restaurant, index) => (
          <ItemsContainer key={index}>
            <Card name={Restaurant.name} img={Restaurant.img} />
          </ItemsContainer>
        ))}
      {restaurants.length === 0 && <NoData>Sem Registros :(</NoData>}
    </Container>
  );
};

export default Restaurants;
