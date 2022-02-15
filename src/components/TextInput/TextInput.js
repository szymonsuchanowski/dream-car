import React from 'react';
import StyledTextInput from './TextInput.styled';

const TextInput = (props) => {
    const renderField = () => {
        const {
            field: { name, label, type },
        } = props;
        return (
            <>
                <input type={type} name={name} id={name} required />
                <label htmlFor={name}>{label}</label>
            </>
        );
    };

    return <StyledTextInput>{renderField()}</StyledTextInput>;
};

export default TextInput;
