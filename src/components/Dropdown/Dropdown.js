import React, { useContext } from 'react';
import StyledDropdown from './Dropdown.styled';
import DropdownLabel from './DropdownLabel';
import DropdownHeader from './DropdownHeader';
import DropdownList from './DropdownList';
import Error from '../Error';
import useDropdown from '../../hooks/useDropdown';
import formContext from '../../context/formContext';

const Dropdown = ({ field: { name, label, items } }) => {
    const { open, toggleDropdown } = useDropdown();

    const formHandler = useContext(formContext);

    const {
        [name]: { value: selectedValue },
    } = formHandler.formState;

    const setDropdownHeader = () => {
        if (selectedValue !== '') {
            return selectedValue;
        }
        return open ? 'select below' : 'click to choose';
    };

    return (
        <>
            <StyledDropdown isOpen={open} isSelected={selectedValue !== ''}>
                <DropdownLabel>{label}</DropdownLabel>
                <div>
                    <DropdownHeader toggleDropdown={toggleDropdown} isOpen={open}>
                        {setDropdownHeader()}
                    </DropdownHeader>
                    <DropdownList
                        name={name}
                        items={items}
                        toggleDropdown={toggleDropdown}
                        isOpen={open}
                    />
                </div>
            </StyledDropdown>
            <Error>{formHandler.errors[name]}</Error>
        </>
    );
};

export default Dropdown;
