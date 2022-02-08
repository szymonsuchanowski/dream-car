import React, { useState } from 'react';
import { StyledSurvey } from './Survey.styled';

const Survey = () => {
    const [step, setStep] = useState(0);

    const showNextStep = () => setStep(step + 1);

    const showPrevStep = () => setStep(step - 1);

    const handleStepChange = (direction) => {
        return direction === 'next' ? showNextStep() : showPrevStep();
    };

    return (
        <StyledSurvey>
            <Title>rent a car</Title>
            <SurveyContent step={step} />
            <SurveyActions step={step} action={handleStepChange} />
            <ProgressBar progress={step} />
        </StyledSurvey>
    );
};

export default Survey;
