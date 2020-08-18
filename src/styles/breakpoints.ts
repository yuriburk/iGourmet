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
  xsm: `@media only screen and (max-width: ${screenSize.xsm})`,
  sm: `@media only screen and (max-width: ${screenSize.sm})`,
  md: `@media only screen and (max-width: ${screenSize.md})`,
  lg: `@media only screen and (max-width: ${screenSize.lg})`,
  xl: `@media only screen and (max-width: ${screenSize.xl})`,
  xxl: `@media only screen and (max-width: ${screenSize.xxl})`,
  xlg: `@media only screen and (max-width: ${screenSize.xlg})`,
};

export default breakPoints;
