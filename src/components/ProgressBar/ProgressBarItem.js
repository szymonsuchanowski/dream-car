import React from 'react';
import StyledProgressBarItem from './ProgressBarItem.styled';

const ProgressBarItem = ({ children, txt, step, num }) => {
    const isComplete = num < step;
    const isActive = num === step;

    return (
        <StyledProgressBarItem isActive={isActive} isComplete={isComplete} txt={txt}>
            {isComplete ? '\u2713' : children}
        </StyledProgressBarItem>
    );
};

export default ProgressBarItem;
