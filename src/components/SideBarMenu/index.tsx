import React from 'react';
import { FiMenu, FiHelpCircle } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { useSpring } from 'react-spring';

import { IControl, IMenuItem } from '../../models/global';
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
    icon: AiOutlineHome,
    title: 'Página Principal',
    url: '/',
  },
  {
    icon: BsPerson,
    title: 'Perfil',
    url: '#',
  },
  {
    icon: AiOutlineShoppingCart,
    title: 'Carrinho',
    url: '#',
  },
  {
    icon: MdFavoriteBorder,
    title: 'Favoritos',
    url: '#',
  },
  {
    icon: FiHelpCircle,
    title: 'Ajuda',
    url: '#',
  },
];

const SideBarMenu: React.FC<IControl> = ({ isEnabled, handleSetIsEnabled }) => {
  const menuContainerProps = useSpring({
    width: isEnabled ? 250 : 0,
  });
  const containerProps = useSpring({
    opacity: isEnabled ? 1 : 0,
    config: { duration: 250 },
  });

  const handleExitMenu = () => {
    handleSetIsEnabled(false);
  };

  return (
    <Container
      style={{
        ...containerProps,
        visibility: containerProps.opacity.interpolate(o =>
          o === 0 ? 'hidden' : 'visible',
        ),
      }}
    >
      <OverlayContainer onClick={handleExitMenu} />
      <MenuContainer style={menuContainerProps}>
        <MenuHeader>
          <MenuTitle>Menu</MenuTitle>
          <MenuIcon onClick={handleExitMenu}>
            <FiMenu />
          </MenuIcon>
        </MenuHeader>
        {items.map((item: IMenuItem, index: number) => (
          <Item key={index} href={item.url}>
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
