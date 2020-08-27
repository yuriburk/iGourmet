import React from 'react';

import { IHeaderProps } from '../../models/global';
import { Container, Content } from './styles';

const Header: React.FC<IHeaderProps> = ({
  leftComponent,
  title,
  rightComponent,
}) => (
  <Container>
    <Content>
      {leftComponent}
      <h1>{title}</h1>
      {rightComponent}
    </Content>
  </Container>
);

export default Header;
