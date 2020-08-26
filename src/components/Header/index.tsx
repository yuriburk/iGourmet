import React from 'react';

import { IHeaderProps } from '../../models/global';
import { Container } from './styles';

const Header: React.FC<IHeaderProps> = ({
  leftComponent,
  title,
  rightComponent,
}) => (
  <Container>
    {leftComponent}
    <h1>{title}</h1>
    {rightComponent}
  </Container>
);

export default Header;
