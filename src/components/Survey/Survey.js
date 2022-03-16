import React, { useState } from 'react';
import StyledSurvey from './Survey.styled';
import ThemeSwitcher from '../ThemeSwitcher';
import Title from '../Title';
import Content from '../Content';
import ProgressBar from '../ProgressBar';
import useForm from '../../hooks/useForm';
import formContext from '../../context/formContext';

const Survey = ({ toggleTheme }) => {
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
            <StyledSurvey>
                <ThemeSwitcher toggleTheme={toggleTheme} />
                <Title>rent a car</Title>
                <Content
                    step={step}
                    handleStepChange={handleStepChange}
                    handleSubmit={handleSubmit}
                />
                <ProgressBar step={step} />
            </StyledSurvey>
        </Provider>
    );
};

export default Survey;
