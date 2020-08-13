import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  background-color: ${props => props.theme.colors.secondaryYellow};
  margin: 32px 0;
  border-radius: 20px;
  height: 140px;
  width: 100%;

  ${props => props.theme.breakpoints.lg} {
    margin-top: 12px;
    padding: 0 12px;
  }
`;

export const Image = styled.img`
  height: 158px;
  margin-top: -18px;

  ${props => props.theme.breakpoints.lg} {
    height: 120px;
    margin-top: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.primaryOrange};
  margin-bottom: 8px;

  ${props => props.theme.breakpoints.sm} {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.secondaryGray};

  ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
