import React from 'react';

import { Container, Title, MoreContainer, Icon } from './styles';

const Presentation = ({ title, link }) => {
  return (
    <Container>
      {!link && <Title>{title}</Title>}
      {link && (
        <MoreContainer href={link}>
          <Title>{title}</Title>
          <Icon />
        </MoreContainer>
      )}
    </Container>
  );
};

export default Presentation;
