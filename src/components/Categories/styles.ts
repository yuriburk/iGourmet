import styled from 'styled-components';
import Slider from 'react-slick';
import { RiArrowDropRightLine } from 'react-icons/ri';

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
`;

export const MoreTitle = styled.h3`
  font-size: 12px;
  color: ${props => props.theme.colors.primaryDark};
`;

export const Icon = styled(RiArrowDropRightLine)`
  height: 24px;
  width: 24px;
`;

export const CategoryCarousel = styled(Slider).attrs(props => ({
  infinite: true,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: props.theme.screenSize.xlg,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: props.theme.screenSize.xxl,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: props.theme.screenSize.xl,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: props.theme.screenSize.md,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: props.theme.screenSize.xxsm,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}))``;

export const CategoryItemContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  height: 160px;
  width: 90px;
  padding: 4px;
  border-radius: 58px;
  background-color: ${props => props.theme.colors.primaryYellow};

  ${props => props.theme.breakpoints.sm} {
    width: 70px;
    height: 120px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: ${props => props.theme.colors.primaryWhite};
  margin: 5px 0px;

  ${props => props.theme.breakpoints.sm} {
    width: 50px;
    height: 50px;
  }
`;

export const CategoryImage = styled.img`
  height: 80px;
  width: 80px;
  padding: 15px;

  ${props => props.theme.breakpoints.sm} {
    width: 60px;
    height: 60px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
  white-space: nowrap;

  ${props => props.theme.breakpoints.sm} {
    margin-top: 12px;
    font-size: 10px;
  }
`;
