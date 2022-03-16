import React, { useContext } from 'react';
import StyledDropdown from './Dropdown.styled';
import DropdownLabel from './DropdownLabel';
import DropdownHeader from './DropdownHeader';
import DropdownList from './DropdownList';
import Error from '../Error';
import useToggle from '../../hooks/useToggle';
import formContext from '../../context/formContext';

const Dropdown = ({ field: { name, label, items, order } }) => {
    const [isOpen, toggleDropdown] = useToggle();

    const formHandler = useContext(formContext);

    const {
        [name]: { value: selectedValue },
    } = formHandler.formState;

    const setDropdownHeader = () => {
        if (selectedValue !== '') {
            return selectedValue;
        }
        return isOpen ? 'select below' : 'click to choose';
    };

    return (
        <>
            <StyledDropdown isOpen={isOpen} isSelected={selectedValue !== ''}>
                <DropdownLabel>{label}</DropdownLabel>
                <div>
                    <DropdownHeader toggleDropdown={toggleDropdown} isOpen={isOpen}>
                        {setDropdownHeader()}
                    </DropdownHeader>
                    <DropdownList
                        name={name}
                        items={items}
                        toggleDropdown={toggleDropdown}
                        isOpen={isOpen}
                        order={order}
                    />
                </div>
            </StyledDropdown>
            <Error>{formHandler.errors[name]}</Error>
        </>
    );
};

export default Dropdown;
