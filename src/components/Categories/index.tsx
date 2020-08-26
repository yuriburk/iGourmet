import React from 'react';

import Presentation from '../Presentation';
import {
  Container,
  CategoryCarousel,
  CategoryItemContainer,
  CategoryItem,
  ImageContainer,
  CategoryImage,
  CategoryTitle,
} from './styles';

interface ICategorie {
  img: string;
  name: string;
}

interface ICategories {
  categories: ICategorie[];
  title: string;
  link: string;
}

const Categories: React.FC<ICategories> = ({ categories, title, link }) => {
  return (
    <Container>
      <Presentation title={title} link={link} />
      <CategoryCarousel>
        {categories.map((category: ICategorie, index: number) => (
          <CategoryItemContainer key={index}>
            <CategoryItem>
              <ImageContainer>
                <CategoryImage src={category.img} alt={category.name} />
              </ImageContainer>
              <CategoryTitle>{category.name}</CategoryTitle>
            </CategoryItem>
          </CategoryItemContainer>
        ))}
      </CategoryCarousel>
    </Container>
  );
};

export default Categories;
