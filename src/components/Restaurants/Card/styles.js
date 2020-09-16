import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';

export const Container = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: flex-start;

  padding: 0px 12px 12px 16px;
  overflow: hidden;
`;

export const RestaurantItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryWhite};
  overflow: hidden;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  img + div {
    margin: 0px 8px;
  }
`;

export const RestaurantImage = styled.img`
  width: 70px;
  height: 70px;
`;

export const RestaurantSpec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;

  width: 100%;
  margin-top: 8px;
`;

export const RestaurantTitle = styled.h2`
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const RestaurantInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg + p {
    margin: 0px 3px;
  }
`;

export const ScoreIcon = styled(AiOutlineStar)`
  font-weight: bold;

  svg {
    width: 16px;
    height: 16px;
  }

  ${props => props.theme.breakpoints.sm} {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const ScoreInfo = styled.p`
  font-size: 16px;
  font-weight: bold;

  ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const RestaurantInfo = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.tertiaryGray};

  ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
`;
