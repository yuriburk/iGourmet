import React from 'react';

import {
  Container,
  Title,
  CategoryCarousel,
  CategoryItem,
  CategoryImage,
  CategoryTitle,
} from './styles';

interface ICategories {
  categories: any;
}

const Categories: React.FC<ICategories> = ({ categories }) => {
  return (
    <Container>
      <Title>Categorias</Title>

      <CategoryCarousel>
        {categories.map((category: any, index: number) => (
          <CategoryItem key={index}>
            <CategoryImage src={category.img} alt={category.name} />

            <CategoryTitle>{category.name}</CategoryTitle>
          </CategoryItem>
        ))}
      </CategoryCarousel>
    </Container>
  );
};

export default Categories;
