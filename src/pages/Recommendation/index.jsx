import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Header from '../../components/Header';
import SideBarMenu from '../../components/SideBarMenu';
import Filter from '../../components/Filter';
import { Container } from './styles';

const Search = () => {
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
      <Filter />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Search;
