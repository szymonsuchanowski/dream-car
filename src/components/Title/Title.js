import React from 'react';
import StyledTitle from './Title.styled';

const Title = ({ children }) => (
    <StyledTitle>
        <h1>{children}</h1>
    </StyledTitle>
);

export default Title;
