import React from 'react';
import { FiMenu, FiHelpCircle } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { useSpring } from 'react-spring';

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
