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

interface IMore {
  title: string;
  link: string;
}

interface ICategories {
  categories: any;
  title: string;
  more: IMore;
}

const Categories: React.FC<ICategories> = ({ categories, title, more }) => {
  const presentation = {
    data: {
      title: title,
      link: more.link,
      moreTitle: more.title,
    },
  };

  return (
    <Container>
      <Presentation data={presentation.data} />
      <CategoryCarousel>
        {categories.map((category: any, index: number) => (
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
