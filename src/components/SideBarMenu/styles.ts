import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const OverlayContainer = styled(animated.div)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const MenuContainer = styled(animated.div)`
  position: fixed;
  background-color: ${props => props.theme.colors.primaryWhite};
  height: 100vh;
  width: 250px;
  z-index: 2;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const MenuTitle = styled.h1`
  color: ${props => props.theme.colors.primaryDark};
`;

export const MenuIcon = styled.div`
  svg {
    cursor: pointer;
    height: 28px;
    width: 28px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;
  height: 50px;
  width: 100%;
  margin: 5px 0px;
  background-color: ${props => props.theme.colors.secondaryYellow};

  &:hover {
    background-color: ${props => props.theme.colors.primaryYellow};
  }

  svg {
    font-size: 18px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 30%;
`;

export const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 70%;
`;

export const ItemTitle = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.primaryDark};
`;
