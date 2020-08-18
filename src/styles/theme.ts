import { colors } from './colors';
import breakpoints, { screenSize } from './breakpoints';

export const theme = {
  colors,
  breakpoints,
  screenSize,
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
