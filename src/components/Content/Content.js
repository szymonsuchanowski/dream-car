import React from 'react';
import { getStepsData } from '../../helpers/helpersFunctions';
import StyledContent from './Content.styled';
import ContentActions from './ContentActions';
import Welcome from '../Welcome';
import { Step1, Step2, Step3 } from '../Steps';
import Summary from '../Summary';
import Title from '../Title';

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
            <Title>
                <h2>{getStepsData(step, 'title')}</h2>
            </Title>
            {renderContentStep()}
            <ContentActions step={step} handleStepChange={handleStepChange} />
        </StyledContent>
    );
};

export default Content;
