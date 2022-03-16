import React from 'react';
import StyledDropdownList from './DropdownList.styled';
import DropdownItem from './DropdownItem';

const DropdownList = ({ name, items, toggleDropdown, isOpen, order }) => {
    const renderDropdownItems = () =>
        items.map((item) => (
            <DropdownItem
                key={item.value}
                toggleDropdown={toggleDropdown}
                item={item}
                name={name}
            />
        ));

    return (
        <StyledDropdownList isOpen={isOpen} order={order}>
            {renderDropdownItems()}
        </StyledDropdownList>
    );
};

export default DropdownList;
