import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider as StyledProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { theme } from './styles/theme';

const App = () => {
  return (
    <BrowserRouter>
      <StyledProvider theme={theme}>
        <GlobalStyle />

        <Routes />
      </StyledProvider>
    </BrowserRouter>
  );
};

export default App;
