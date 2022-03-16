import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useToggle } from '../../hooks';
import { ResetStyle, GlobalStyle, themeStyle } from '../../styled';
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
