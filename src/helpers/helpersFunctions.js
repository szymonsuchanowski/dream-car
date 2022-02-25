import stepsData from '../data/stepsData';
import formFieldsStep1 from '../data/step1Data';
import formFieldsStep2 from '../data/step2Data';
import formFieldsStep3 from '../data/step3Data';

export const getStepsData = (step, dataToGet) => {
    const stepData = stepsData[step];
    return stepData[dataToGet];
};

export const convertArrToObj = (arr) => Object.assign({}, ...arr);

export const createStateData = () => {
    const fields = formFieldsStep1.concat(formFieldsStep2, formFieldsStep3);

    return fields.map((field) => {
        const { name, type } = field;
        return {
            [name]: {
                value: type === 'checkbox' ? false : '',
                isValid: false,
                isFill: false,
            },
        };
    });
};

export const createInitStateObj = () => convertArrToObj(createStateData());

export const getInputsNames = (fields) => fields.map((field) => field.name);

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

const getCurrentDate = () => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    return new Date(Date.now() - timezoneOffset).toISOString().slice(0, 10);
};

export const setDateRange = (type) => (type === 'date' ? getCurrentDate() : null);

export const isDateDisabled = (name, formState) => {
    if (name === 'endTime' || name === 'endDate') {
        const {
            startDate: { isValid: isStartDateValid },
            startTime: { isValid: isStartTimeValid },
        } = formState;
        return !(isStartDateValid && isStartTimeValid);
    }
    return null;
};

export const countTime = (date, time) => new Date(`${date} ${time}`).getTime();

export const countHoursDifference = (time1, time2) => (time2 - time1) / (60 * 60 * 1000);