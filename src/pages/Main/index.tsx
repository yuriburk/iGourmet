import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import Promotion from 'components/Promotion';
import Categories from 'components/Categories';
import SideBarMenu from 'components/SideBarMenu';
import { Container } from './styles';

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
  {
    img: 'https://image.flaticon.com/icons/svg/673/673887.svg',
    name: 'Pizza',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/673/673887.svg',
    name: 'Pizza',
  },
];

const Main: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Container>
      <Header
        leftComponent={<FiMenu onClick={() => setIsEnabled(!isEnabled)} />}
        title="iGourmet"
        rightComponent={<FiSearch />}
      />
      <Promotion />
      <Categories categories={categories} />
      <SideBarMenu
        outIsEnabled={isEnabled}
        functionSetIsEnabled={setIsEnabled}
      />
    </Container>
  );
};

export default Main;
