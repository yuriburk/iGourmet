import React from 'react';

import {
  Container,
  PresentationContainer,
  Title,
  MoreContainer,
  MoreTitle,
  Icon,
  RecommendationCarousel,
  RecommendationItemContainer,
  RecommendationItem,
  RecommendationImage,
  RecommendationSpec,
  RecommendationTitle,
  RecommendationInfoContainer,
  ScoreIcon,
  ScoreInfo,
  RecommendationInfo,
} from './styles';

interface IMore {
  title: string;
  link: string;
}

interface IRecommendation {
  recommendations: any;
  title: string;
  more: IMore;
}

const Recommendations: React.FC<IRecommendation> = ({
  recommendations,
  title,
  more,
}) => {
  return (
    <Container>
      <PresentationContainer>
        <Title>{title}</Title>
        <MoreContainer href={more.link}>
          <MoreTitle>{more.title}</MoreTitle>
          <Icon />
        </MoreContainer>
      </PresentationContainer>
      <RecommendationCarousel>
        {recommendations.map((Recommendation: any, index: number) => (
          <RecommendationItemContainer key={index}>
            <RecommendationItem>
              <RecommendationImage
                src={Recommendation.img}
                alt={Recommendation.name}
              />
              <RecommendationSpec>
                <RecommendationTitle>{Recommendation.name}</RecommendationTitle>
                <RecommendationInfoContainer>
                  <ScoreIcon />
                  <ScoreInfo>5.0</ScoreInfo>
                  <RecommendationInfo>Pizza</RecommendationInfo>
                </RecommendationInfoContainer>
              </RecommendationSpec>
            </RecommendationItem>
          </RecommendationItemContainer>
        ))}
      </RecommendationCarousel>
    </Container>
  );
};

export default Recommendations;
