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

export const OfferCarousel = styled(Slider).attrs(props => ({
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

export const OfferItemContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
`;

export const OfferItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  overflow: hidden;
  width: 300px;
  padding: 0px 12px;
  background-color: ${props => props.theme.colors.primaryWhite};

  ${props => props.theme.breakpoints.sm} {
    width: 150px;
  }
`;

export const OfferImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

export const OfferSpec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${props => props.theme.colors.quaternaryGray};
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  padding: 4px;
`;

export const OfferTitle = styled.h2`
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const RestaurantTitle = styled.h4`
  font-size: 12px;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
  }
`;

export const OfferInfoContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: flex-start;

  p + p {
    margin: 0px 5px;
  }
`;

export const OfferPriceInfo = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryGreen};

  ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const OldPriceInfo = styled.p`
  font-size: 14px;
  text-decoration: line-through;
  color: ${props => props.theme.colors.primaryRed};

  ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
`;
