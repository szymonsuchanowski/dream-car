import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ResetStyle, GlobalStyle, themeStyle } from '../../styled';
import { useToggle } from '../../hooks';
import Survey from '../Survey';
import StyledApp from './App.styled';

const App = () => {
    const [isDarkMode, toggleTheme] = useToggle();

    return (
        <>
            <ResetStyle />
            <ThemeProvider theme={isDarkMode ? themeStyle.dark : themeStyle.light}>
                <GlobalStyle />
                <StyledApp>
                    <Survey toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                </StyledApp>
            </ThemeProvider>
        </>
    );
};

export default App;
