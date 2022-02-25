import React, { useState } from 'react';
import StyledSurvey from './Survey.styled';
import Title from '../Title';
import Content from '../Content';
import ProgressBar from '../ProgressBar';
import useForm from '../../hooks/useForm';
import formContext from '../../context/formContext';

const Survey = () => {
    const [step, setStep] = useState(0);
    const {
        formState,
        errors,
        handleChange,
        handleDropdownChange,
        handleCheckboxChange,
        validateFieldOnBlur,
        validateStepData,
        dateErr,
        removeFieldError,
    } = useForm();
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

    const handleSubmit = (e, stepNumber) => {
        e.preventDefault();
        const isStepDataValid = validateStepData(stepNumber);
        return isStepDataValid ? showFollowingStep('next') : null;
    };

    return (
        <StyledSurvey>
            <Title>rent a car</Title>
            <Provider
                value={{
                    formState,
                    handleChange,
                    handleDropdownChange,
                    handleCheckboxChange,
                    errors,
                    validateFieldOnBlur,
                    dateErr,
                    removeFieldError,
                }}
            >
                <Content
                    step={step}
                    handleStepChange={handleStepChange}
                    handleSubmit={handleSubmit}
                />
            </Provider>
            <ProgressBar step={step} />
        </StyledSurvey>
    );
};

export default Survey;
