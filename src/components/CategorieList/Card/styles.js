import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';

export const Container = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  overflow: hidden;
`;

export const RestaurantItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  cursor: pointer;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryWhite};
  overflow: hidden;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-height: 220px;
  min-height: 160px;

  img + div {
    margin: 0px 8px;
  }
`;

export const RestaurantImage = styled.img`
  width: 100%;
  max-height: 100%;
  min-height: 160px;
  filter: brightness(50%);
`;

export const RestaurantTitle = styled.h2`
  font-size: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: ${props => props.theme.colors.primaryWhite};

  ${props => props.theme.breakpoints.xl} {
    font-size: 18px;
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
