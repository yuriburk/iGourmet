import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.primaryDark};
  margin-bottom: 8px;
`;

interface ISlide {
  slidesCount: number;
}

export const CategoryCarousel = styled(Slider).attrs({
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 675,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
})``;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;
