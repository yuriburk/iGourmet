import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import { Container } from './styles';

const Recommendation: React.FC = () => {
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
      <SideBarMenu
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};

export default Recommendation;
