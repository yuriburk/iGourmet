import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import Promotion from 'components/Promotion';
import Categories from 'components/Categories';
import Recommendations from 'components/Recommendations';
import Offers from 'components/Offers';
import SideBarMenu from 'components/SideBarMenu';
import categories from 'api/categories';
import recommendations from 'api/recommendations';
import offers from 'api/offers';
import { Container } from './styles';

const categoriesMore = {
  title: 'Todas as categorias',
  link: '#',
};

const recommendationMore = {
  title: 'Todas as recomendações',
  link: '/recomendacoes',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const offersMore = {
  title: 'Todas as ofertas',
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
      <Offers title={'Ofertas'} offers={offers} more={offersMore} />
      <Recommendations
        title={'Recomendações'}
        recommendations={recommendations}
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
