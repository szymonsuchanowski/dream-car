import React from 'react';
import StyledDropdownHeader from './DropdownHeader.styled';

const DropdownHeader = ({ toggleDropdown, isOpen, children }) => (
    <StyledDropdownHeader onClick={() => toggleDropdown()} isOpen={isOpen}>
        {children}
    </StyledDropdownHeader>
);

export default DropdownHeader;
