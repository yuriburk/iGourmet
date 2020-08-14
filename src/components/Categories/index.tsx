import React, { useState, useEffect } from 'react';

import useWindowDimensions from '../../hooks/useWindowDimensions';
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
  title: string;
}

const Categories: React.FC<ICategories> = ({ categories, title }) => {
  return (
    <Container>
      <Title>{title}</Title>

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
