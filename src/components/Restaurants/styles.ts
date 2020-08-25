import styled from 'styled-components';
import Slider from 'react-slick';

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