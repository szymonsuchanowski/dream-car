import React from 'react';
import stepsData from '../../data/stepsData';
import StyledProgressBar from './ProgressBar.styled';
import ProgressBarItem from './ProgressBarItem';

const ProgressBar = ({ step }) => {
    const progress = (100 / (stepsData.length - 2)) * (step - 1);

    const renderProgressItem = () =>
        stepsData.map((stepData, index) => {
            const { label } = stepData;
            return label ? (
                <ProgressBarItem key={label} step={step} num={index} txt={label}>
                    {index}
                </ProgressBarItem>
            ) : null;
        });

    return (
        <StyledProgressBar progress={progress} counter={step}>
            <ul>{renderProgressItem()}</ul>
        </StyledProgressBar>
    );
};

export default ProgressBar;
