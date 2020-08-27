import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import List from 'components/CategorieList/index';
import categories from 'api/categories';
import { Container } from './styles';

const Categorie: React.FC = () => {
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
      <List categories={categories} title={'Categorias'} />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Categorie;
