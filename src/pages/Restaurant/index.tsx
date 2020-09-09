import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import queryString from 'query-string';

import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import Restaurants from 'components/Restaurants';
import restaurants from 'api/restaurants';
import { IAny } from '../../models/global';
import { Container } from './styles';

const Restaurant: React.FC<IAny> = params => {
  const [isMenuEnabled, setIsMenuEnabled] = useState(false);
  const filter = queryString.parse(params.location.search).categories as string;

  return (
    <Container>
      <Header
        leftComponent={
          <FiMenu onClick={() => setIsMenuEnabled(state => !state)} />
        }
        title="iGourmet"
      />
      <Restaurants
        filter={filter}
        restaurants={restaurants}
        title={'Restaurantes'}
      />
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Restaurant;
