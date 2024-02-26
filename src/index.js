// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import App from './App';
import { GlobalStyles } from './styles/globalStyles';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
