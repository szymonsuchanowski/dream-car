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
import formFieldsStep1 from '../data/step1FieldsData';

function useForm() {
    const [formState, dispatch] = useReducer(formReducer, createInitStateObj());
    const [errors, setErrors] = useState({});
    const validator = new DataValidator();

    /*      const createErrors = (errorsArr) => {
        const inputsNamesList = getInputsNames();
        inputsNamesList.forEach((inputName) => {
            const err = validator.checkDataErrors(inputName, formState[inputName].value);
            return err ? errorsArr.push(err) : null;
        });
    };

    const findErrors = () => {
        const errorsArr = [];
        createErrors(errorsArr);
        const errorsObj = convertArrToObj(errorsArr);
        return errorsObj;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsObj = findErrors();
        return isObjectEmpty(errorsObj) ? setErrors({}) : setErrors(errorsObj);
    };      */

    //--------------------------------------

    const stepsData = {
        1: formFieldsStep1,
    };

    const createErrors = (errorsArr, fieldsNamesList) => {
        fieldsNamesList.forEach((fieldName) => {
            const err = validator.checkDataErrors(fieldName, formState[fieldName].value);
            return err ? errorsArr.push(err) : null;
        });
    };

    const findErrors = (fieldsNamesList) => {
        const errorsArr = [];
        createErrors(errorsArr, fieldsNamesList);
        const errorsObj = convertArrToObj(errorsArr);
        return errorsObj;
    };

    const validateStepData = (step) => {
        const stepFields = stepsData[step];
        const fieldNamesList = getInputsNames(stepFields);
        const errorsObj = findErrors(fieldNamesList);
        const isDataValid = isObjectEmpty(errorsObj);
        if (!isDataValid) {
            setErrors({ ...errors, ...errorsObj });
        }
        return isDataValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: FORM_ACTIONS.CHANGE_VALUE,
            payload: { name, value },
        });
    };

    const setInputError = (err, name) => {
        setErrors({ ...errors, ...err });
        dispatch({
            type: FORM_ACTIONS.SET_INVALID,
            payload: { name },
        });
    };

    const setInputValid = (name) => {
        delete errors[name];
        dispatch({
            type: FORM_ACTIONS.SET_VALID,
            payload: { name },
        });
    };

    const validateInput = (e) => {
        const { name, value } = e.target;
        const err = validator.checkDataErrors(name, value);
        return err ? setInputError(err, name) : setInputValid(name);
    };

    return { formState, dispatch, errors, handleChange, validateInput, validateStepData };
}

export default useForm;
