import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import Promotion from 'components/Promotion';
import Categories from 'components/Categories';
import Restaurants from 'components/Restaurants';
import Offers from 'components/Offers';
import SideBarMenu from 'components/SideBarMenu';
import categories from 'api/categories';
import restaurants from 'api/restaurants';
import offers from 'api/offers';
import { Container } from './styles';

const categoriesMore = {
  title: 'Todas as categorias',
  link: '#',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const offersMore = {
  title: 'Todas as ofertas',
  link: '#',
};

const restaurantMore = {
  title: 'Todos os restaurantes',
  link: '/recomendacoes',
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
      <Offers title={'Ofertas'} offers={offers} more={offersMore} />
      <Restaurants
        title={'Restaurantes'}
        restaurants={restaurants}
        more={restaurantMore}
      />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Main;
