import styled from 'styled-components';

const StyledDropdown = styled.div`
    position: relative;
    height: 40px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    padding: 10px;
    box-shadow: ${({ isOpen, isSelected }) =>
        isOpen || isSelected
            ? '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff'
            : 'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff'};
    :not(:first-child) {
        margin-top: 1.5rem;
    }
`;

export default StyledDropdown;
