import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  margin: 10px 0px;
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
