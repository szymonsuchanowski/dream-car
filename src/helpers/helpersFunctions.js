import stepsData from '../data/stepsData';

export const getStepsData = (step, dataToGet) => {
    const stepData = stepsData[step];
    return stepData[dataToGet];
};

export const testFunc = () => {
    const num = 1;
    const num2 = num * 2;
    return num2;
};
