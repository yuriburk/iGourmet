import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import SearchBox from '../../components/SearchBox';
import Categories from '../../api/categories';
import { Container } from './styles';

const Recommendation: React.FC = () => {
  const [isMenuEnabled, setIsMenuEnabled] = useState(false);
  const [categoriaPesquisa, setCategoriaPesquisa] = useState([] as any);

  const handleSearchBoxChange = () => {
    setCategoriaPesquisa(
      Categories.map(categories => {
        return {
          label: `${categories.name} - Categoria`,
          value: categories,
        };
      }),
    );
  };

  return (
    <Container>
      <Header
        leftComponent={
          <FiMenu onClick={() => setIsMenuEnabled(state => !state)} />
        }
        title="iGourmet"
      />
      <SearchBox
        items={categoriaPesquisa}
        onChange={handleSearchBoxChange}
        onItemClick={console.log('oi')}
      />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Recommendation;
