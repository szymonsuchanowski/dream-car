import React from 'react';
import StyledDropdownHeader from './DropdownHeader.styled';

const DropdownHeader = ({ toggleDropdown, children }) => (
    <StyledDropdownHeader onClick={() => toggleDropdown()}>{children}</StyledDropdownHeader>
);

export default DropdownHeader;
