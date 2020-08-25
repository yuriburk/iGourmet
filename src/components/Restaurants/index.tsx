import React from 'react';

import Presentation from '../Presentation';
import Card from './Card';
import { Container, RestaurantCarousel } from './styles';

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
  const presentation = {
    data: {
      title,
      link: more.link,
      moreTitle: more.title,
    },
  };

  return (
    <Container>
      <Presentation data={presentation.data} />
      <RestaurantCarousel>
        {restaurants.map((Restaurant: IRestaurant, index: number) => (
          <Card name={Restaurant.name} img={Restaurant.img} key={index} />
        ))}
      </RestaurantCarousel>
    </Container>
  );
};

export default Restaurants;
