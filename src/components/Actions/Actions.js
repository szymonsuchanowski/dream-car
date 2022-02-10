import React from 'react';
import StyledActions from './Actions.styled';
import Button from '../Button';
import { getStepsData } from '../../helpers/helpersFunctions';

const Actions = ({ step, handleStepChange }) => {
    const showBtns = (btnsData) =>
        btnsData.map(({ txt, type }) => (
            <Button key={txt} handleStepChange={handleStepChange} actionType={type}>
                {txt}
            </Button>
        ));

    const renderActionsBtns = () => {
        const btnsData = getStepsData(step, 'actions');
        return btnsData ? showBtns(btnsData) : null;
    };

    return <StyledActions>{renderActionsBtns()}</StyledActions>;
};

export default Actions;
