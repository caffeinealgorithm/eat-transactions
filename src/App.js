import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Meta from './components/Meta';

const theme = {
  white: '#ffffff'
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;
    color: ${theme.white};
    padding: 0;
    margin: 0;
  }

  hr {
    border: none;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Meta />
      <GlobalStyle />
      <Header />
    </div>
  </ThemeProvider>
);

export default App;
