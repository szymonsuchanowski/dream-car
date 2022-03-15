import React from 'react';
import StyledError from './Error.styled';

const Error = ({ children, isCenter }) => (
    <StyledError isCenter={isCenter}>{children ? <p>{children}</p> : null}</StyledError>
);

export default Error;
