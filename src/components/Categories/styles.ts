import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.primaryDark};
`;

export const CategoriesList = styled.ul`
  display: flex;

  overflow-x: auto;
  margin-top: 12px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 180px;
  padding: 14px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.primaryYellow};
`;

export const CategoryImage = styled.img`
  border: 2px solid;
  border-radius: 50%;
  height: 80px;
  padding: 8px;
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  margin-top: 12px;
`;
