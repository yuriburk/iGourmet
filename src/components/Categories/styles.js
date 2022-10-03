import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  margin: 10px 0px;
`;

export const CategoryCarousel = styled(Slider).attrs(props => ({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: props.theme.screenSize.xlg,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: props.theme.screenSize.xxl,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: props.theme.screenSize.xl,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: props.theme.screenSize.md,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: props.theme.screenSize.xxsm,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}))``;

export const CategoryItemContainer = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;

  text-decoration: none;
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

  color: ${props => props.theme.colors.primaryDark};

  ${props => props.theme.breakpoints.sm} {
    margin-top: 12px;
    font-size: 10px;
  }
`;
