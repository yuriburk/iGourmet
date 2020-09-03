import React from 'react';

import { ICategorie } from '../../../models/global';
import {
  Container,
  RestaurantItem,
  RestaurantImage,
  RestaurantTitle,
} from './styles';

const Card: React.FC<ICategorie> = ({ id, img, name }) => {
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
