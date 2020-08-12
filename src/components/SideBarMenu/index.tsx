import React from 'react';
import { FiMenu, FiHelpCircle } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

import {
  Container,
  OverlayContainer,
  MenuContainer,
  MenuHeader,
  MenuTitle,
  MenuIcon,
  Item,
  Icon,
  ItemTitleContainer,
  ItemTitle,
} from './styles';

const items = [
  {
    icon: BsPerson,
    title: 'Perfil',
  },
  {
    icon: AiOutlineShoppingCart,
    title: 'Carrinho',
  },
  {
    icon: MdFavoriteBorder,
    title: 'Favoritos',
  },
  {
    icon: FiHelpCircle,
    title: 'Ajuda',
  },
];

interface IControl {
  isEnabled: boolean;
  handleSetIsEnabled: any;
}

const SideBarMenu: React.FC<IControl> = ({ isEnabled, handleSetIsEnabled }) => {
  const handleExitMenu = () => {
    handleSetIsEnabled(false);
  };

  return (
    <Container isEnabled={isEnabled}>
      <OverlayContainer onClick={handleExitMenu} />
      <MenuContainer isEnabled={isEnabled}>
        <MenuHeader>
          <MenuTitle>Menu</MenuTitle>
          <MenuIcon onClick={handleExitMenu}>
            <FiMenu />
          </MenuIcon>
        </MenuHeader>
        {items.map((item: any, index: number) => (
          <Item key={index}>
            <Icon>
              <item.icon />
            </Icon>
            <ItemTitleContainer>
              <ItemTitle>{item.title}</ItemTitle>
            </ItemTitleContainer>
          </Item>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default SideBarMenu;
