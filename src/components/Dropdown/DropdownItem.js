import React, { useContext } from 'react';
import formContext from '../../context/formContext';
import StyledDropdownItem from './DropdownItem.styled';

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
