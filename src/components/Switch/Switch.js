import React, { useContext } from 'react';
import StyledSwitch from './Switch.styled';
import formContext from '../../context/formContext';
import useSwitch from '../../hooks/useSwitch';

const Switch = ({ field: { name, label, type } }) => {
    const formHandler = useContext(formContext);
    const {
        [name]: { value: isOnValue },
    } = formHandler.formState;
    const { isOn, toggleSwitch } = useSwitch(isOnValue);

    const handleChange = () => {
        formHandler.handleCheckboxChange(name, !isOn);
        toggleSwitch();
    };

    return (
        <StyledSwitch isOn={isOn}>
            <p>{label}</p>
            <div>
                <input
                    id={name}
                    type={type}
                    name={name}
                    checked={isOn}
                    onChange={() => handleChange()}
                />
                <label htmlFor={name}>
                    <span />
                </label>
            </div>
        </StyledSwitch>
    );
};

export default Switch;
