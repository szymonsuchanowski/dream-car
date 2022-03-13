import React, { useContext } from 'react';
import StyledDateInput from './DateInput.styled';
import formContext from '../../context/formContext';
import { setDateRange, isDateDisabled } from '../../helpers/helpersFunctions';

const DateInput = (props) => {
    const formHandler = useContext(formContext);

    const renderField = () => {
        const {
            field: { name, label, type },
        } = props;
        return (
            <>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    onChange={formHandler.handleChange}
                    onBlur={formHandler.validateFieldOnBlur}
                    value={formHandler.formState[name].value}
                    min={setDateRange(type)}
                    disabled={isDateDisabled(name, formHandler.formState)}
                />
                {formHandler.errors[name] && <p>{formHandler.errors[name]}</p>}
            </>
        );
    };

    const isValid = () => {
        const {
            field: { name },
        } = props;
        return formHandler.formState[name].isValid;
    };

    const isFill = () => {
        const {
            field: { name },
        } = props;
        return formHandler.formState[name].isFill;
    };

    return (
        <StyledDateInput isValid={isValid()} isFill={isFill()}>
            {renderField()}
        </StyledDateInput>
    );
};

export default DateInput;
