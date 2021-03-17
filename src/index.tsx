import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from './Theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <GlobalStyle />
            <App />
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);
