export const screenSize = {
  xxsm: 320,
  xsm: 370,
  sm: 538,
  md: 674,
  lg: 768,
  xl: 844,
  xxl: 1100,
  xlg: 1250,
};

const breakPoints = {
  xsm: `@media only screen and (max-width: ${screenSize.xsm}px)`,
  sm: `@media only screen and (max-width: ${screenSize.sm}px)`,
  md: `@media only screen and (max-width: ${screenSize.md}px)`,
  lg: `@media only screen and (max-width: ${screenSize.lg}px)`,
  xl: `@media only screen and (max-width: ${screenSize.xl}px)`,
  xxl: `@media only screen and (max-width: ${screenSize.xxl}px)`,
  xlg: `@media only screen and (max-width: ${screenSize.xlg}px)`,
};

export default breakPoints;
