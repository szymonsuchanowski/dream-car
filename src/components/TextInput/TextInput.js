import React, { useContext } from 'react';
import StyledTextInput from './TextInput.styled';
import formContext from '../../context/formContext';

const TextInput = (props) => {
    const formHandler = useContext(formContext);

    const renderField = () => {
        const {
            field: { name, label, type },
        } = props;
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
                    onBlur={formHandler.validateInput}
                    value={formHandler.formState[name].value}
                    required
                />
                <label htmlFor={name}>{label}</label>
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
        <StyledTextInput isValid={isValid()} isFill={isFill()}>
            {renderField()}
        </StyledTextInput>
    );
};

export default TextInput;
