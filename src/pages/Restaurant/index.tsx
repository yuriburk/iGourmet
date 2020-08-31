import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import Restaurants from 'components/Restaurants';
import restaurants from 'api/restaurants';
import { Container } from './styles';

const Restaurant: React.FC = () => {
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
      <Restaurants restaurants={restaurants} title={'Restaurants'} />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Restaurant;
