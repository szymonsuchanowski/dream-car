import React from 'react';
import Welcome from '../components/Welcome';
import Step1 from '../components/Step1/Step1';
import Success from '../components/Success/Success';

function useContent(step) {
    const ComponentsNames = {
        0: Welcome,
        1: Step1,
        2: Success,
    };

    const setComponentName = () => ComponentsNames[step];

    const getComponent = () => {
        const ComponentName = setComponentName();
        return ComponentName ? <ComponentName /> : null;
    };

    return getComponent;
}

export default useContent;
