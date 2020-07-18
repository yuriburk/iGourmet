import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import SearchBox from 'components/SearchBox';
import { Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <Header
      leftComponent={<FiMenu />}
      title="iGourmet"
      rightComponent={<FiSearch />}
    />

    <SearchBox onChange={event => console.log(event.target.value)} />
  </Container>
);

export default Main;
