import React from 'react';
import StyledContentTitle from './ContentTitle.styled';
import { getStepsData } from '../../helpers/helpersFunctions';

const ContentTitle = ({ step }) => {
    const contentTitle = getStepsData(step, 'title');

    return <StyledContentTitle>{contentTitle}</StyledContentTitle>;
};

export default ContentTitle;
