import React, { useState } from 'react';

import SearchBox from '../SearchBox';
import { IHeaderProps } from '../../models/global';
import { Container, Content, LeftComponent, TitleContainer, Title, SearchBoxContainer } from './styles';
import Categories from '../../api/categories';
import { screenSize } from '../../styles/breakpoints';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Header: React.FC<IHeaderProps> = ({ leftComponent, title, search }) => {
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
        <LeftComponent>{leftComponent}</LeftComponent>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        {useWindowDimensions().width > screenSize.md && search && 
        (<SearchBoxContainer>
          <SearchBox
            items={categoriaPesquisa}
            onChange={handleSearchBoxChange}
            onItemClick={console.log('oi')}
          />
        </SearchBoxContainer>
        )}
      </Content>
    </Container>
  );
};

export default Header;
