import React, { useState, useEffect } from 'react';
import { FiMenu, FiHelpCircle } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

import {
  Container,
  MenuContainer,
  MenuHeader,
  MenuTitle,
  MenuIcon,
  Item,
  Icon,
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
  outIsEnabled: boolean;
  functionSetIsEnabled: any;
}

const SideBarMenu: React.FC<IControl> = ({
  outIsEnabled = false,
  functionSetIsEnabled,
}) => {
  const [isEnabled, setIsEnabled] = useState(outIsEnabled);

  const exitMenu = () => {
    setIsEnabled(false);
    functionSetIsEnabled(false);
  };

  useEffect(() => {
    if (isEnabled !== outIsEnabled) {
      setIsEnabled(outIsEnabled);
    }
  }, [outIsEnabled]);

  return (
    <Container isEnabled={isEnabled}>
      <MenuContainer isEnabled={isEnabled}>
        <MenuHeader>
          <MenuTitle>Menu</MenuTitle>
          <MenuIcon onClick={() => exitMenu()}>
            <FiMenu />
          </MenuIcon>
        </MenuHeader>
        {items.map((item: any, index: number) => (
          <Item key={index}>
            <Icon>
              <item.icon>Carrinho</item.icon>
            </Icon>
            <p>{item.title}</p>
          </Item>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default SideBarMenu;
