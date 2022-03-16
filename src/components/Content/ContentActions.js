import React from 'react';
import { getStepsData } from '../../helpers/helpersFunctions';
import StyledContentActions from './ContentActions.styled';
import Button from '../Button';

const ContentActions = ({ step, handleStepChange }) => {
    const showBtns = (btnsData) =>
        btnsData.map(({ txt, type }) =>
            type === 'submit' ? (
                <Button key={txt} value={txt} type={type} />
            ) : (
                <Button
                    key={txt}
                    handleStepChange={handleStepChange}
                    actionType={type}
                    step={step}
                    type={type}
                >
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
