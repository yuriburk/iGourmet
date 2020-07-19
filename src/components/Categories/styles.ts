import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.primaryDark};
  margin-bottom: 8px;
`;

export const CategoryCarousel = styled(ItemsCarousel).attrs(() => ({
  gutter: 20,
  outsideChevron: true,
}))``;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  height: 168px;
  max-width: 100px;
  padding: 14px;
  border-radius: 58px;
  background-color: ${props => props.theme.colors.primaryYellow};

  ${props => props.theme.breakpoints.md} {
    height: 148px;
    max-width: 90px;
  }
`;

export const CategoryImage = styled.img`
  border: 2px solid;
  border-radius: 50%;
  height: 74px;
  padding: 8px;
  background-color: ${props => props.theme.colors.primaryWhite};

  ${props => props.theme.breakpoints.md} {
    height: 54px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  margin-top: 14px;
`;
