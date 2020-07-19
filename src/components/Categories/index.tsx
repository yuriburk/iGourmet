import React from 'react';

import {
  Container,
  Title,
  CategoriesList,
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

      <CategoriesList>
        {categories.map((category: any, index: number) => (
          <CategoryItem key={index}>
            <CategoryImage src={category.img} alt={category.name} />

            <CategoryTitle>{category.name}</CategoryTitle>
          </CategoryItem>
        ))}
      </CategoriesList>
    </Container>
  );
};

export default Categories;
