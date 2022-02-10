import React from 'react';
import StyledSubtitle from './Subtitle.styled';
import { getStepsData } from '../../helpers/helpersFunctions';

const Subtitle = ({ step }) => {
    const subtitle = getStepsData(step, 'subtitle');

    return <StyledSubtitle>{subtitle}</StyledSubtitle>;
};

export default Subtitle;
