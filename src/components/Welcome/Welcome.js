import React from 'react';
import welcomeData from '../../data/welcomeData';
import Paragraph from '../Paragraph';
import StyledWelcome from './Welcome.styled';

const Welcome = () => {
    const renderParagraphs = () =>
        welcomeData.map((para) => {
            const { txt, id } = para;
            return <Paragraph key={id}>{txt}</Paragraph>;
        });

    return <StyledWelcome>{renderParagraphs()}</StyledWelcome>;
};

export default Welcome;
