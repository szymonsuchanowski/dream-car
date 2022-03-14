import React, { useContext } from 'react';
import StyledTextInput from './TextInput.styled';
import Error from '../Error';
import formContext from '../../context/formContext';

const TextInput = (props) => {
    const formHandler = useContext(formContext);

    const {
        field: { name, label, type },
    } = props;

    const isValid = () => formHandler.formState[name].isValid;

    const isFill = () => formHandler.formState[name].isFill;

    const renderField = () => {
        console.log(formHandler.formState[name].isValid);
        console.log(formHandler.formState[name].isFill);
        console.log(formHandler.errors);
        console.log(formHandler.formState);
        return (
            <>
                <input
                    type={type}
                    name={name}
                    id={name}
                    onChange={formHandler.handleChange}
                    onBlur={formHandler.validateFieldOnBlur}
                    value={formHandler.formState[name].value}
                    autoComplete="off"
                    required
                />
                <label htmlFor={name}>{label}</label>
            </>
        );
    };

    return (
        <>
            <StyledTextInput isValid={isValid()} isFill={isFill()}>
                {renderField()}
            </StyledTextInput>
            <Error>{formHandler.errors[name]}</Error>
        </>
    );
};

export default TextInput;
