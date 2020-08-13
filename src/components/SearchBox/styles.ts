import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primaryGray};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: ${props => props.theme.colors.secondaryGray};

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.primaryDark};

    &::placeholder {
      color: ${props => props.theme.colors.secondaryGray};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 50px #232129 inset;
      -webkit-text-fill-color: #f4ede8;
    }
  }

  svg {
    color: ${props => props.theme.colors.secondaryGray};
  }
`;
