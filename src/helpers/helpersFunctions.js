import stepsData from '../data/stepsData';
import formFields from '../data/step1FieldsData';

export const getStepsData = (step, dataToGet) => {
    const stepData = stepsData[step];
    return stepData[dataToGet];
};

export const convertArrToObj = (arr) => Object.assign({}, ...arr);

export const createStateData = () =>
    formFields.map((field) => {
        const { name } = field;
        return {
            [name]: {
                value: '',
                isValid: false,
                isFill: false,
            },
        };
    });

export const createInitStateObj = () => convertArrToObj(createStateData());

export const getInputsNames = (fields) => fields.map((field) => field.name);

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
