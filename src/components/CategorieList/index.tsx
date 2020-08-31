import React from 'react';

import Presentation from '../Presentation';
import Card from './Card';
import { ICategories, ICategorie } from '../../models/global';
import { Container, ItemsContainer } from './styles';

const Categorie: React.FC<ICategories> = ({ categories, title }) => {
  return (
    <Container>
      <Presentation title={title} />
      {categories.map((Categorie: ICategorie, index: number) => (
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
