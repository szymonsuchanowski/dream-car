import React, { useState } from 'react';
import StyledSurvey from './Survey.styled';
import Title from '../Title';
import Content from '../Content';
import ProgressBar from '../ProgressBar';
import useForm from '../../hooks/useForm';
import formContext from '../../context/formContext';

const Survey = () => {
    const [step, setStep] = useState(0);
    const { formState, errors, handleChange, validateInput, validateStepData } = useForm();

    const { Provider } = formContext;

    console.log(formState);

    const showNextStep = () => setStep(step + 1);

    const showPrevStep = () => setStep(step - 1);

    const showFollowingStep = (direction) =>
        direction === 'next' ? showNextStep() : showPrevStep();

    const handleStepChange = (direction, stepNumber) => {
        if (stepNumber === 0 || direction === 'prev') {
            return showFollowingStep(direction);
        }
        const isStepDataValid = validateStepData(stepNumber);
        return isStepDataValid ? showFollowingStep(direction) : null;
    };

    return (
        <StyledSurvey>
            <Provider value={{ formState, handleChange, errors, validateInput }}>
                <Title>rent a car</Title>
                <Content step={step} handleStepChange={handleStepChange} />
                <ProgressBar step={step} />
            </Provider>
        </StyledSurvey>
    );
};

export default Survey;
