import React from 'react';
import StyledProgressBar from './ProgressBar.styled';
import ProgressBarItem from './ProgressBarItem';

const ProgressBar = ({ step }) => {
    const progress = (100 / 3) * (step - 1);

    return (
        <StyledProgressBar progress={progress} step={step}>
            <ProgressBarItem step={step} num={1} txt="personal info">
                1
            </ProgressBarItem>
            <ProgressBarItem step={step} num={2} txt="rental info">
                2
            </ProgressBarItem>
            <ProgressBarItem step={step} num={3} txt="car info">
                3
            </ProgressBarItem>
            <ProgressBarItem step={step} num={4} txt="success!">
                4
            </ProgressBarItem>
        </StyledProgressBar>
    );
};

export default ProgressBar;
