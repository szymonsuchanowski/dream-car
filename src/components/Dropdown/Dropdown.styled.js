import styled from 'styled-components';

const StyledDropdown = styled.div`
    align-items: center;
    border-radius: 12px;
    box-shadow: ${({ isOpen, isSelected }) =>
        isOpen || isSelected
            ? '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff'
            : 'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff'};
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    width: 100%;

    :not(:first-child) {
        margin-top: 1.5rem;
    }
`;

export default StyledDropdown;
