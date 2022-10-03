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

const Categories = ({ categories, title, link }) => {
  return (
    <Container>
      <Presentation title={title} link={link} />
      <CategoryCarousel>
        {categories.map((category, index) => (
          <CategoryItemContainer
            key={index}
            href={`/restaurantes?categories=${category.id}`}
          >
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
