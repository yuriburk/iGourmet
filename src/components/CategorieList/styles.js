import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin: 10px 0px;
  margin-bottom: 120px;
  width: 100%;
`;

export const ItemsContainer = styled.div`
  width: 50%;

  ${props => props.theme.breakpoints.xl} {
    width: 100%;
  }
`;
