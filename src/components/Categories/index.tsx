import React from 'react';

import {
  Container,
  PresentationContainer,
  Title,
  MoreContainer,
  MoreTitle,
  Icon,
  CategoryCarousel,
  CategoryItemContainer,
  CategoryItem,
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
  return (
    <Container>
      <PresentationContainer>
        <Title>{title}</Title>
        <MoreContainer href={more.link}>
          <MoreTitle>{more.title}</MoreTitle>
          <Icon />
        </MoreContainer>
      </PresentationContainer>
      <CategoryCarousel>
        {categories.map((category: any, index: number) => (
          <CategoryItemContainer key={index}>
            <CategoryItem>
              <CategoryImage src={category.img} alt={category.name} />
              <CategoryTitle>{category.name}</CategoryTitle>
            </CategoryItem>
          </CategoryItemContainer>
        ))}
      </CategoryCarousel>
    </Container>
  );
};

export default Categories;
