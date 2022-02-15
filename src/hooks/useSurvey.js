import React from 'react';
import Welcome from '../components/Welcome';
import { Step1, Step2, Step3 } from '../components/Steps';
import Success from '../components/Success';

function useSurvey(step) {
    const ComponentsNames = {
        0: Welcome,
        1: Step1,
        2: Step2,
        3: Step3,
        4: Success,
    };

    const setComponentName = () => ComponentsNames[step];

    const getComponent = () => {
        const ComponentName = setComponentName();
        return ComponentName ? <ComponentName /> : null;
    };

    return getComponent;
}

export default useSurvey;
