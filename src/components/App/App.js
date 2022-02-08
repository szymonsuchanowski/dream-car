import React from 'react';
import ResetStyle from '../../styled/ResetStyle';
import Survey from '../Survey';
import StyledApp from './App.styled';

const App = () => (
    <>
        <ResetStyle />
        <StyledApp>
            <Survey />
        </StyledApp>
    </>
);

export default App;
