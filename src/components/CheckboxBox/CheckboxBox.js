import React, { useContext } from 'react';
import { useToggle } from '../../hooks';
import formContext from '../../context/formContext';
import StyledCheckboxBox from './CheckboxBox.styled';
import Error from '../Error';
import Switcher from '../Switcher';

const CheckboxInput = ({ field: { name, label } }) => {
    const formHandler = useContext(formContext);

    const {
        [name]: { value: isOnValue },
    } = formHandler.formState;

    const [isOn, toggleSwitch] = useToggle(isOnValue);

    const handleChange = () => {
        formHandler.handleCheckboxChange(name, !isOn);
        toggleSwitch();
    };

    return (
        <>
            <StyledCheckboxBox isOn={isOn}>
                <p>{label}</p>
                <Switcher name={name} isOn={isOn} handleChange={handleChange} />
            </StyledCheckboxBox>
            <Error>{formHandler.errors[name]}</Error>
        </>
    );
};

export default CheckboxInput;
