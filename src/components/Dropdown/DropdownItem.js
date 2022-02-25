import React, { useContext } from 'react';
import StyledDropdownItem from './DropdownItem.styled';
import formContext from '../../context/formContext';

const DropdownItem = ({ toggleDropdown, item, name }) => {
    const formHandler = useContext(formContext);
    const { value, label } = item;

    const handleDropdownChoose = () => {
        toggleDropdown();
        formHandler.handleDropdownChange(name, value);
    };

    return <StyledDropdownItem onClick={() => handleDropdownChoose()}>{label}</StyledDropdownItem>;
};

export default DropdownItem;
