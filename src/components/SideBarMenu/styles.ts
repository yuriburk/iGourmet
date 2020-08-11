import styled, { css } from 'styled-components';

interface IControl {
  isEnabled?: boolean;
}

export const Container = styled.div<IControl>`
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
  backdrop-filter: blur(1px);

  ${props =>
    props.isEnabled &&
    css`
      visibility: visible;
    `}
  ${props =>
    !props.isEnabled &&
    css`
      visibility: hidden;
    `}
`;

export const MenuContainer = styled.div<IControl>`
  position: fixed;
  background-color: ${props => props.theme.colors.primaryWhite};
  height: 100vh;
  width: 250px;
  transition: transform 0.2s ease;
  transform: ${props =>
    !props.isEnabled ? 'translateX(-250px)' : 'translateX(0)'};
  z-index: 2;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.colors.secundaryYellow};
`;

export const MenuTitle = styled.h1`
  color: ${props => props.theme.colors.primaryOrange};
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
  justify-content: center;

  height: 50px;
  width: 100%;
  margin: 5px 0px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primaryOrange};

  div + p {
    margin: 0px 4px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.primaryYellow};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
