import React from 'react';
import StyledContent from './Content.styled';
import ContentTitle from './ContentTitle';
import ContentActions from './ContentActions';
import useSurvey from '../../hooks/useSurvey';

const Content = ({ step, handleStepChange }) => {
    const ContentStep = useSurvey(step);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        handleStepChange('next');
    };

    return (
        <StyledContent noValidate onSubmit={(e) => handleSubmit(e)}>
            <ContentTitle step={step} />
            <ContentStep />
            <ContentActions step={step} handleStepChange={handleStepChange} />
        </StyledContent>
    );
};

export default Content;