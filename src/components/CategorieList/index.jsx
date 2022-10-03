import React from 'react';

import Presentation from '../Presentation';
import Card from './Card';
import { Container, ItemsContainer } from './styles';

const Categorie = ({ categories, title }) => {
  return (
    <Container>
      <Presentation title={title} />
      {categories.map((Categorie, index) => (
        <ItemsContainer key={index}>
          <Card
            id={Categorie.id}
            name={Categorie.name}
            img={Categorie.full_img}
          />
        </ItemsContainer>
      ))}
    </Container>
  );
};

export default Categorie;
