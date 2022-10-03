import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Header from '../../components/Header';
import SideBarMenu from '../../components/SideBarMenu';
import ProfileComponent from '../../components/Profile';
import Categories from '../../api/categories';
import { Container } from './styles';

const Profile = () => {
  const [isMenuEnabled, setIsMenuEnabled] = useState(false);
  const [categoriaPesquisa, setCategoriaPesquisa] = useState([]);

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
        search={true}
      />
      <ProfileComponent />
      <SideBarMenu 
        isEnabled={isMenuEnabled}
        handleSetIsEnabled={setIsMenuEnabled}
      />
    </Container>
  );
};
 
export default Profile;
