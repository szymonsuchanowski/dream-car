import React from 'react';
import StyledContentActions from './ContentActions.styled';
import Button from '../Button';
import SubmitButton from '../SubmitButton';
import { getStepsData } from '../../helpers/helpersFunctions';

const ContentActions = ({ step, handleStepChange }) => {
    const showBtns = (btnsData) =>
        btnsData.map(({ txt, type }) =>
            type === 'submit' ? (
                <SubmitButton key={txt} value={txt} />
            ) : (
                <Button key={txt} handleStepChange={handleStepChange} actionType={type} step={step}>
                    {txt}
                </Button>
            ),
        );

    const renderActionsBtns = () => {
        const btnsData = getStepsData(step, 'actions');
        return btnsData ? showBtns(btnsData) : null;
    };

    return <StyledContentActions>{renderActionsBtns()}</StyledContentActions>;
};

export default ContentActions;
