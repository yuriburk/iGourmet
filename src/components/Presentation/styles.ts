import styled from 'styled-components';
import { RiArrowDropRightLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 10px 0px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: ${props => props.theme.colors.primaryDark};
`;

export const MoreContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  ${props => props.theme.breakpoints.sm} {
    margin: 8px;
  }
`;

export const MoreTitle = styled.h3`
  font-size: 12px;
  color: ${props => props.theme.colors.primaryDark};
`;

export const Icon = styled(RiArrowDropRightLine)`
  height: 24px;
  width: 24px;
`;
