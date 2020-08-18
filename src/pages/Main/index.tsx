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

const recommendation = [
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
  {
    img:
      'https://i.pinimg.com/originals/0c/1b/80/0c1b80b48eab75605141970aba8d470a.png',
    name: `Domino's`,
  },
];

const categoriesMore = {
  title: 'Todas as categorias',
  link: '#',
};

const recommendationMore = {
  title: 'Todas as recomendações',
  link: '#',
};

const Main: React.FC = () => {
  const [isMenuEnabled, setIsMenuEnabled] = useState(false);

  return (
    <Container>
      <Header
        leftComponent={
          <FiMenu onClick={() => setIsMenuEnabled(state => !state)} />
        }
        title="iGourmet"
        rightComponent={<FiSearch />}
      />
      <Promotion />
      <Categories
        title={'Categorias'}
        categories={categories}
        more={categoriesMore}
      />
      <Categories
        title={'Recomendações'}
        categories={recommendation}
        more={recommendationMore}
      />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Main;
