import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import Promotion from 'components/Promotion';
import { Container } from './styles';
import Categories from 'components/Categories';

const categories = [
  {
    img: 'https://image.flaticon.com/icons/svg/673/673887.svg',
    name: 'Pizza',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/673/673887.svg',
    name: 'Pizza',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/673/673887.svg',
    name: 'Pizza',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/673/673887.svg',
    name: 'Pizza',
  },
];

const Main: React.FC = () => (
  <Container>
    <Header
      leftComponent={<FiMenu />}
      title="iGourmet"
      rightComponent={<FiSearch />}
    />
    <Promotion />
    <Categories categories={categories} />
  </Container>
);

export default Main;
