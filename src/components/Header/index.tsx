import React, { useState } from 'react';

import SearchBox from '../SearchBox';
import { IHeaderProps } from '../../models/global';
import { Container, Content, SearchBoxContainer } from './styles';
import Categories from '../../api/categories';
import { screenSize } from '../../styles/breakpoints';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Header: React.FC<IHeaderProps> = ({ leftComponent, title, search = true }) => {
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
        {useWindowDimensions().width > screenSize.md && 
        (<SearchBoxContainer>
          <SearchBox
            items={categoriaPesquisa}
            onChange={handleSearchBoxChange}
            onItemClick={console.log('oi')}
          />
        </SearchBoxContainer>)
        }
      </Content>
    </Container>
  );
};

export default Header;
