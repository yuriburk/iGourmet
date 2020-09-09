import React, { useState } from 'react';

import SearchBox from '../SearchBox';
import { IHeaderProps } from '../../models/global';
import { Container, Content, SearchBoxContainer } from './styles';
import Categories from '../../api/categories';

const Header: React.FC<IHeaderProps> = ({ leftComponent, title }) => {
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
      <Content>
        {leftComponent}
        <h1>{title}</h1>
        <SearchBoxContainer>
          <SearchBox
            items={categoriaPesquisa}
            onChange={handleSearchBoxChange}
            onItemClick={console.log('oi')}
          />
        </SearchBoxContainer>
      </Content>
    </Container>
  );
};

export default Header;
