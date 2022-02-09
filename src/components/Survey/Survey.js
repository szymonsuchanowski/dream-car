import React, { useState } from 'react';
import StyledSurvey from './Survey.styled';
import Title from '../Title';
import Content from '../Content';
import Actions from '../Actions';
import ProgressBar from '../ProgressBar';

const Survey = () => {
    const [step, setStep] = useState(0);

    const showNextStep = () => setStep(step + 1);

    const showPrevStep = () => setStep(step - 1);

    const handleStepChange = (direction) =>
        direction === 'next' ? showNextStep() : showPrevStep();

    return (
        <StyledSurvey>
            <Title>rent a car</Title>
            <Content step={step} />
            <Actions step={step} handleStepChange={handleStepChange} />
            <ProgressBar progress={step} />
        </StyledSurvey>
    );
};

export default Survey;
