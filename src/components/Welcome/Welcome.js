import React from 'react';
import StyledWelcome from './Welcome.styled';

const Welcome = () => (
    <StyledWelcome>
        <p>
            To receive a full quote, please <span>complete the inquiry form</span>.
        </p>
        <p>
            You are <span>only 3 steps</span> away from booking your dream car.
        </p>
        <p>
            Click the button below to <span>get started!</span>
        </p>
    </StyledWelcome>
);

export default Welcome;
