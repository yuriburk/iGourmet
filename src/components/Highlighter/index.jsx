import React from 'react';

import { colors } from '../../styles/colors';
import { Container } from './styles';

const Highlighter = ({
  searchWords,
  text,
  autoEscape = true,
  style = {
    backgroundColor: colors.primaryYellow,
    color: colors.primaryDark,
  },
}) => {
  return (
    <Container
      searchWords={searchWords}
      autoEscape={autoEscape}
      textToHighlight={text}
      highlightStyle={style}
    />
  );
};

export default Highlighter;
