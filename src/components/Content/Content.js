import React from 'react';
import useContent from '../../hooks/useContent';

const Content = ({ step }) => {
    const ContentStep = useContent(step);

    return <ContentStep />;
};

export default Content;
