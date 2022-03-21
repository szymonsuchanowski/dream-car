import { useReducer, useState } from 'react';
import DataValidator from '../helpers/DataValidator';
import FORM_ACTIONS from '../helpers/actions';
import {
    createInitStateObj,
    getInputsNames,
    convertArrToObj,
    isObjectEmpty,
} from '../helpers/helpersFunctions';
import formReducer from '../reducers/formReducer';
import formFieldsStep1 from '../data/step1Data';
import formFieldsStep2 from '../data/step2Data';
import formFieldsStep3 from '../data/step3Data';

function useForm() {
    const [formState, dispatch] = useReducer(formReducer, createInitStateObj());
    const [errors, setErrors] = useState({});
    const [dateErr, setDateErr] = useState(false);
    const validator = new DataValidator();

    const stepsData = {
        1: formFieldsStep1,
        2: formFieldsStep2,
        3: formFieldsStep3,
    };

    const setFieldValue = (name, value) => {
        dispatch({
            type: FORM_ACTIONS.CHANGE_VALUE,
            payload: { name, value },
        });
    };

    const setFieldCorrectness = (name, actionType) => {
        dispatch({
            type: actionType,
            payload: { name },
        });
    };

    const createFieldError = (errorsArr, name, err) => {
        errorsArr.push(err);
        setFieldCorrectness(name, FORM_ACTIONS.SET_INVALID);
    };

    const createStepErrors = (errorsArr, fieldsNamesList) => {
        fieldsNamesList.forEach((name) => {
            const err = validator.checkDataErrors(name, formState[name].value);
            return err
                ? createFieldError(errorsArr, name, err)
                : setFieldCorrectness(name, FORM_ACTIONS.SET_VALID);
        });
    };

    const findStepErrors = (fieldsNamesList) => {
        const errorsArr = [];
        createStepErrors(errorsArr, fieldsNamesList);
        const errorsObj = convertArrToObj(errorsArr);
        return errorsObj;
    };

    const addFieldError = (fieldErr, name) => {
        setErrors({ ...errors, ...fieldErr });
        setFieldCorrectness(name, FORM_ACTIONS.SET_INVALID);
    };

    const removeFieldError = (name) => {
        const { [name]: tmpValue, ...rest } = errors;
        setErrors(rest);
        setFieldCorrectness(name, FORM_ACTIONS.SET_VALID);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFieldValue(name, value);
    };

    const handleDropdownChange = (name, value) => {
        setFieldValue(name, value);
        setFieldCorrectness(name, FORM_ACTIONS.SET_VALID);
        return errors[name] ? removeFieldError(name) : null;
    };

    const handleCheckboxChange = (name, value) => setFieldValue(name, value);

    const validateFieldOnBlur = (e) => {
        const { name, value } = e.target;
        const err = validator.checkDataErrors(name, value);
        return err ? addFieldError(err, name) : removeFieldError(name);
    };

    const getDateInfo = () => {
        const {
            startDate: { value: startDate },
            endDate: { value: endDate },
            startTime: { value: startTime },
            endTime: { value: endTime },
        } = formState;
        return { startDate, endDate, startTime, endTime };
    };

    const isDateRangeValid = () => {
        const { startDate, endDate, startTime, endTime } = getDateInfo();
        const isDateValid = validator.checkDateErrors(startDate, endDate, startTime, endTime);
        setDateErr(!isDateValid);
        return isDateValid;
    };

    const validateStepData = (step) => {
        const stepFields = stepsData[step];
        const fieldNamesList = getInputsNames(stepFields);
        const errorsObj = findStepErrors(fieldNamesList);
        let isDataValid = isObjectEmpty(errorsObj);
        if (!isDataValid) {
            setErrors({ ...errors, ...errorsObj });
        } else if (step === 2) {
            isDataValid = isDateRangeValid();
        }
        return isDataValid;
    };

    return {
        formState,
        errors,
        handleChange,
        handleDropdownChange,
        handleCheckboxChange,
        validateFieldOnBlur,
        validateStepData,
        dateErr,
        removeFieldError,
    };
}

export default useForm;
