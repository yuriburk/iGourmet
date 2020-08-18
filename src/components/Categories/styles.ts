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

  h1 + a {
    margin: 0px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: ${props => props.theme.colors.primaryDark};
  margin-bottom: 8px;
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
  slidesToScroll: 10,
  responsive: [
    {
      breakpoint: props.theme.screenSize.xlg,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: props.theme.screenSize.xxl,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
    {
      breakpoint: props.theme.screenSize.xl,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: props.theme.screenSize.md,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: props.theme.screenSize.sm,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: props.theme.screenSize.xsm,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: props.theme.screenSize.xxsm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
  justify-content: center;

  cursor: pointer;
  height: 168px;
  max-width: 100px;
  padding: 14px;
  border-radius: 58px;
  background-color: ${props => props.theme.colors.primaryYellow};
`;

export const CategoryImage = styled.img`
  border: 2px solid;
  border-radius: 50%;
  height: 74px;
  padding: 8px;
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  margin-top: 14px;
  text-align: center;
`;
