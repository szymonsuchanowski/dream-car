import React, { useContext } from 'react';
import StyledDropdown from './Dropdown.styled';
import DropdownLabel from './DropdownLabel';
import DropdownBox from './DropdownBox';
import DropdownHeader from './DropdownHeader';
import DropdownList from './DropdownList';
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
        return open ? 'choose from list' : 'click to choose';
    };

    return (
        <StyledDropdown>
            <DropdownLabel>{label}</DropdownLabel>
            <DropdownBox>
                <DropdownHeader toggleDropdown={toggleDropdown}>
                    {setDropdownHeader()}
                </DropdownHeader>
                {open && <DropdownList name={name} items={items} toggleDropdown={toggleDropdown} />}
                {formHandler.errors[name] && <p>{formHandler.errors[name]}</p>}
            </DropdownBox>
        </StyledDropdown>
    );
};

export default Dropdown;
