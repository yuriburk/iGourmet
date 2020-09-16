import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Header from '../../components/Header';
import Promotion from '../../components/Promotion';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';
import Offers from '../../components/Offers';
import SideBarMenu from '../../components/SideBarMenu';
import categories from '../../api/categories';
import restaurants from '../../api/restaurants';
import offers from '../../api/offers';
import { Container } from './styles';

const Main = () => {
  const [isMenuEnabled, setIsMenuEnabled] = useState(false);

  return (
    <Container>
      <Header
        leftComponent={
          <FiMenu onClick={() => setIsMenuEnabled(state => !state)} />
        }
        title="iGourmet"
        search={true}
      />
      <Promotion />
      <Categories
        categories={categories}
        title={'Categorias'}
        link={'/categorias'}
      />
      <Offers offers={offers} title={'Ofertas'} link={'#'} />
      <Restaurants restaurants={restaurants} title={'Restaurantes'} />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Main;
