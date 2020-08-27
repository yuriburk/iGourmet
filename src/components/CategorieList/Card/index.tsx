import React from 'react';

import { ICategorie } from '../../../models/global';
import {
  Container,
  RestaurantItem,
  RestaurantImage,
  RestaurantTitle,
} from './styles';

const Card: React.FC<ICategorie> = ({ img, name }) => {
  return (
    <Container>
      <RestaurantItem>
        <RestaurantImage src={img} alt={name} />
        <RestaurantTitle>{name}</RestaurantTitle>
      </RestaurantItem>
    </Container>
  );
};

export default Card;
