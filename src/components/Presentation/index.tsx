import React from 'react';

import { IPresentation } from '../../models/global';
import { Container, Title, MoreContainer, Icon } from './styles';

const Presentation: React.FC<IPresentation> = ({ title, link }) => {
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
