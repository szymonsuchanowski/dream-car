import React from 'react';
import StyledButton from './Button.styled';

const Button = ({ handleStepChange, actionType, children }) => (
    <StyledButton type="button" onClick={() => handleStepChange(actionType)}>
        {children}
    </StyledButton>
);

export default Button;
