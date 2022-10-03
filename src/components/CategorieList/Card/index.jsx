import React from 'react';

import {
  Container,
  RestaurantItem,
  RestaurantImage,
  RestaurantTitle,
} from './styles';

const Card = ({ id, img, name }) => {
  return (
    <Container>
      <RestaurantItem href={`/restaurantes?categories=${id}`}>
        <RestaurantImage src={img} alt={name} />
        <RestaurantTitle>{name}</RestaurantTitle>
      </RestaurantItem>
    </Container>
  );
};

export default Card;
