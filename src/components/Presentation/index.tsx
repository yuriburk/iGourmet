import React from 'react';

import { Container, Title, MoreContainer, MoreTitle, Icon } from './styles';

interface IPresentationFields {
  title: string;
  link: string;
  moreTitle: string;
}

interface IPresentation {
  data: IPresentationFields;
}

const Presentation: React.FC<IPresentation> = ({
  data: { title, link, moreTitle },
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <MoreContainer href={link}>
        <MoreTitle>{moreTitle}</MoreTitle>
        <Icon />
      </MoreContainer>
    </Container>
  );
};

export default Presentation;
