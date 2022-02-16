import React from 'react';
import StyledButton from './Button.styled';

const Button = ({ handleStepChange, actionType, step, children }) => (
    <StyledButton type="button" onClick={() => handleStepChange(actionType, step)}>
        {children}
    </StyledButton>
);

export default Button;
