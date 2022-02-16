import { useReducer, useState } from 'react';
import DataValidator from '../helpers/DataValidator';
import {
    createInitStateObj,
    getInputsNames,
    convertArrToObj,
    isObjectEmpty,
} from '../helpers/helpersFunctions';

function useForm() {
    const formReducer = (state, action) => {
        const { type } = action;
        switch (type) {
            case 'change': {
                const {
                    payload: { name, value },
                } = action;
                return {
                    ...state,
                    [name]: {
                        ...state[name],
                        value,
                    },
                };
            }
            case 'invalid': {
                const {
                    payload: { name },
                } = action;
                return {
                    ...state,
                    [name]: {
                        ...state[name],
                        isValid: false,
                        isFill: true,
                    },
                };
            }
            case 'valid': {
                const {
                    payload: { name },
                } = action;
                return {
                    ...state,
                    [name]: {
                        ...state[name],
                        isValid: true,
                        isFill: true,
                    },
                };
            }
            case 'reset':
                return createInitStateObj();
            default:
                return state;
        }
    };

    const [formState, dispatch] = useReducer(formReducer, createInitStateObj());
    const [errors, setErrors] = useState({});
    const validator = new DataValidator();

    const createErrors = (errorsArr) => {
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
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'change',
            payload: { name, value },
        });
    };

    const setInputError = (err, name) => {
        setErrors({ ...errors, ...err });
        dispatch({
            type: 'invalid',
            payload: { name },
        });
    };

    const setInputValid = (name) => {
        delete errors[name];
        dispatch({
            type: 'valid',
            payload: { name },
        });
    };

    const validateInput = (e) => {
        const { name, value } = e.target;
        const err = validator.checkDataErrors(name, value);
        return err ? setInputError(err, name) : setInputValid(name);
    };

    return { formState, dispatch, errors, handleSubmit, handleChange, validateInput };
}

export default useForm;
