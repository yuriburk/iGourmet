import React from 'react';

import Banner from '../../assets/safe-banner.png';
import { Container, Image, TextContainer, Title, Subtitle } from './styles';

const Promotion: React.FC = () => (
  <Container>
    <Image src={Banner} alt="Banner" />
    <TextContainer>
      <Title>Fique seguro</Title>
      <Subtitle>Deixe que nós cuidamos de buscar a sua comida :)</Subtitle>
    </TextContainer>
  </Container>
);

export default Promotion;
