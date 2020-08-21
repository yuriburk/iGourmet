import styled from 'styled-components';
import Slider from 'react-slick';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';

export const Container = styled.div`
  margin: 10px 0px;
`;

export const PresentationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 10px 0px;

  h1 + a {
    margin: 0px 10px;

    ${props => props.theme.breakpoints.sm} {
      margin: 0px;
    }
  }

  ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
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

export const RestaurantCarousel = styled(Slider).attrs(props => ({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: props.theme.screenSize.lg,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: props.theme.screenSize.md,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: props.theme.screenSize.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}))`
  margin-bottom: 120px;
`;

export const RestaurantItemContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

export const RestaurantItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  width: 300px;
  background-color: ${props => props.theme.colors.primaryWhite};
  overflow: hidden;
  margin: 0px 0px 0px 5px;
  padding: 0px 0px 0px 12px;

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
