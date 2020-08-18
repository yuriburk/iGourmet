import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import Promotion from 'components/Promotion';
import Categories from 'components/Categories';
import Recommendations from 'components/Recommendations';
import SideBarMenu from 'components/SideBarMenu';
import { Container } from './styles';

const categories = [
  {
    img: 'https://image.flaticon.com/icons/svg/673/673887.svg',
    name: 'Pizza',
  },
  {
    img: 'https://www.flaticon.com/premium-icon/icons/svg/3210/3210788.svg',
    name: 'Fast Food',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/706/706195.svg',
    name: 'Saudável',
  },
  {
    img: 'https://www.flaticon.com/premium-icon/icons/svg/3296/3296533.svg',
    name: 'Árabe',
  },
  {
    img: 'https://www.flaticon.com/premium-icon/icons/svg/1811/1811974.svg',
    name: 'Burger',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/442/442478.svg',
    name: 'Brasileira',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/2243/2243653.svg',
    name: 'Sushi',
  },
  {
    img: 'https://www.flaticon.com/premium-icon/icons/svg/869/869676.svg',
    name: 'Churrasco',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/2913/2913861.svg',
    name: 'Doce',
  },
  {
    img: 'https://image.flaticon.com/icons/svg/3315/3315140.svg',
    name: 'Bolo',
  },
];

const recommendation = [
  {
    img: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    name: `Brickell Pizzaria`,
  },
  {
    img: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    name: `Brickell Pizzaria`,
  },
  {
    img: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    name: `Brickell Pizzaria`,
  },
  {
    img: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    name: `Brickell Pizzaria`,
  },
  {
    img: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    name: `Brickell Pizzaria`,
  },
  {
    img: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    name: `Brickell Pizzaria`,
  },
  {
    img: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    name: `Brickell Pizzaria`,
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
      <Recommendations
        title={'Recomendações'}
        recommendations={recommendation}
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
