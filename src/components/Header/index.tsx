import React from 'react';

import { Container } from './styles';

interface IHeaderProps {
  leftComponent?: React.ReactNode;
  title: string;
  rightComponent?: React.ReactNode;
}

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
