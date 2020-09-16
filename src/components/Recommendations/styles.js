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

export const RecommendationCarousel = styled(Slider).attrs(props => ({
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
      breakpoint: props.theme.screenSize.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}))``;

export const RecommendationItemContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

export const RecommendationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  height: 200px;
  width: 300px;
  padding: 0px 14px;
  background-color: ${props => props.theme.colors.primaryWhite};

  ${props => props.theme.breakpoints.sm} {
    width: 150px;
    height: 120px;
  }
`;

export const RecommendationImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const RecommendationSpec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  margin-top: 8px;
`;

export const RecommendationTitle = styled.h2`
  font-size: 16px;
  white-space: nowrap;

  ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const RecommendationInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg + p {
    margin: 0px 5px;
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

export const RecommendationInfo = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.tertiaryGray};

  ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;
