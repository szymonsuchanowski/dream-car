import React, { useContext } from 'react';
import StyledDateInput from './DateInput.styled';
import Error from '../Error';
import formContext from '../../context/formContext';
import { isDateFieldDisabled } from '../../helpers/helpersFunctions';

const DateInput = (props) => {
    const formHandler = useContext(formContext);
    const {
        field: { name, label, type },
    } = props;

    const renderField = () => (
        <>
            <input
                type={type}
                name={name}
                id={name}
                onChange={formHandler.handleChange}
                onBlur={formHandler.validateFieldOnBlur}
                value={formHandler.formState[name].value}
                disabled={isDateFieldDisabled(name, formHandler.formState)}
                required
            />
            <label htmlFor={name}>{label}</label>
        </>
    );

    const isValid = () => formHandler.formState[name].isValid;

    const isFill = () => formHandler.formState[name].isFill;

    return (
        <>
            <StyledDateInput isValid={isValid()} isFill={isFill()}>
                {renderField()}
            </StyledDateInput>
            <Error>{formHandler.errors[name]}</Error>
        </>
    );
};

export default DateInput;
