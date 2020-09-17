import React from 'react';

import Presentation from '../Presentation';
import Card from './PresentationCard';
import { Container, ItemsContainer, NoData } from './styles';

const RestaurantSelected = ({
  filter,
  restaurant,
}) => {

  function isInFilter(value) {
    return value.id == filter;
  }

  if (filter) restaurant = restaurant.filter(isInFilter)[0];

  console.log(restaurant)

  return (
    <Container>  
      {restaurant &&
      (
        <>
        <Presentation title={restaurant.name} />
        <NoData>Dados :)</NoData>
        </>
      )}
      {!restaurant && <NoData>Sem Registros :(</NoData>}
    </Container>
  );
};

export default RestaurantSelected;
