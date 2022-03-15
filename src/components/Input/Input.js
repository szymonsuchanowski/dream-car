import React, { useContext } from 'react';
import StyledInput from './Input.styled';
import Error from '../Error';
import formContext from '../../context/formContext';
import { isDateFieldDisabled, setDateRange } from '../../helpers/helpersFunctions';

const Input = (props) => {
    const formHandler = useContext(formContext);

    const {
        field: { name, label, type },
    } = props;

    const renderInfo = () => <p>fill start date and time</p>;

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
                min={setDateRange(type)}
                autoComplete="off"
                required
            />
            <label htmlFor={name}>{label}</label>
        </>
    );

    return (
        <>
            <StyledInput>
                {isDateFieldDisabled(name, formHandler.formState) ? renderInfo() : renderField()}
            </StyledInput>
            <Error>
                {isDateFieldDisabled(name, formHandler.formState) ? null : formHandler.errors[name]}
            </Error>
        </>
    );
};

export default Input;
