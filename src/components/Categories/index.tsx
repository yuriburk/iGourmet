import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

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
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Container>
      <Title>Categorias</Title>

      <ItemsCarousel
        numberOfCards={3}
        gutter={20}
        outsideChevron
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
      >
        {categories.map((category: any, index: number) => (
          <CategoryItem key={index}>
            <CategoryImage src={category.img} alt={category.name} />

            <CategoryTitle>{category.name}</CategoryTitle>
          </CategoryItem>
        ))}
      </ItemsCarousel>
    </Container>
  );
};

export default Categories;
