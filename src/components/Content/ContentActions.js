import React from 'react';
import StyledContentActions from './ContentActions.styled';
import Button from '../Button';
import { getStepsData } from '../../helpers/helpersFunctions';

const ContentActions = ({ step, handleStepChange }) => {
    const showBtns = (btnsData) =>
        btnsData.map(({ txt, type }) =>
            type === 'submit' ? (
                <input key={txt} type={type} value={txt} />
            ) : (
                <Button key={txt} handleStepChange={handleStepChange} actionType={type}>
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
