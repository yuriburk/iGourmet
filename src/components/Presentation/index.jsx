import React from 'react';

import { Container, Title, MoreContainer, Icon } from './styles';

const Presentation = ({ title, link, isColor = false }) => {
  return (
    <Container>
      {!link && <Title titleColor={isColor}>{title}</Title>}
      {link && (
        <MoreContainer href={link}>
          <Title titleColor={isColor}>{title}</Title>
          <Icon />
        </MoreContainer>
      )}
    </Container>
  );
};

export default Presentation;
