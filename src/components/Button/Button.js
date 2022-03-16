import React from 'react';
import { StyledButton, StyledSubmitButton } from './Button.styled';

const Button = (props) => {
    const { type } = props;
    if (type === 'submit') {
        const { value } = props;
        return <StyledSubmitButton type="submit" value={value} />;
    }
    const { handleStepChange, actionType, step, children } = props;
    return (
        <StyledButton type="button" onClick={() => handleStepChange(actionType, step)}>
            {children}
        </StyledButton>
    );
};

export default Button;
