import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  svg {
    cursor: pointer;
    height: 28px;
    width: 28px;
  }

  a {
    color: ${(props) => props.theme.colors.primaryWhite};
  }
`;
