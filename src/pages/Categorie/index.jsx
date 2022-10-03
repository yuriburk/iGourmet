import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Header from '../../components/Header';
import SideBarMenu from '../../components/SideBarMenu';
import List from '../../components/CategorieList/index';
import categories from '../../api/categories';
import { Container } from './styles';

const Categorie = () => {
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
      <List categories={categories} title={'Categorias'} />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Categorie;
