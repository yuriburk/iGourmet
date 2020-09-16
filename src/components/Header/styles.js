import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryWhite};
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;
  padding: 14px;

  svg {
    cursor: pointer;
    height: 28px;
    width: 28px;
  }

  a {
    color: ${props => props.theme.colors.primaryWhite};
  }
`;

export const LeftComponent = styled.div`
  width: 30px;
  height: 30px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
`

export const Title = styled.h1`
`

export const SearchBoxContainer = styled.div`
  width: 50%;
`;
