import React from 'react';
import StyledThemeSwitcher from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ toggleTheme }) => (
    <StyledThemeSwitcher>
        <input type="checkbox" id="switcher" name="switcher" onChange={toggleTheme} />
        <label htmlFor="switcher">
            <span />
        </label>
    </StyledThemeSwitcher>
);

export default ThemeSwitcher;
