import useWindowDimensions from 'hooks/useWindowDimensions';
import React, { useMemo, useState } from 'react';

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
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const windowDimension = useWindowDimensions();

  const numberOfCards = useMemo(() => {
    if (windowDimension.width <= 374) {
      return 3;
    }

    if (windowDimension.width <= 508) {
      return 4;
    }

    if (windowDimension.width <= 614) {
      return 5;
    }

    if (windowDimension.width <= 748) {
      return 6;
    }

    if (windowDimension.width <= 924) {
      return 8;
    }

    return 10;
  }, [windowDimension]);

  return (
    <Container>
      <Title>Categorias</Title>

      <CategoryCarousel
        numberOfCards={numberOfCards}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
      >
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
