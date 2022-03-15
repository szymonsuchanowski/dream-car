import React from 'react';
import StyledContent from './Content.styled';
import ContentTitle from './ContentTitle';
import ContentActions from './ContentActions';
import Welcome from '../Welcome';
import { Step1, Step2, Step3 } from '../Steps';
import Summary from '../Summary';

const Content = ({ step, handleStepChange, handleSubmit }) => {
    const ContentComponents = {
        0: <Welcome />,
        1: <Step1 />,
        2: <Step2 />,
        3: <Step3 />,
        4: <Summary />,
    };

    const renderContentStep = () => ContentComponents[step];

    return (
        <StyledContent noValidate onSubmit={(e) => handleSubmit(e, step)}>
            <ContentTitle step={step} />
            {renderContentStep()}
            <ContentActions step={step} handleStepChange={handleStepChange} />
        </StyledContent>
    );
};

export default Content;
