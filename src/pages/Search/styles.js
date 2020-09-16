import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;

export const SearchBoxContainer = styled.div`
  width: 100%;
  border: 1px solid;
  border-color: ${props => props.theme.colors.secondaryYellow};
  border-radius: 5px; 
  padding: 10px;
`;