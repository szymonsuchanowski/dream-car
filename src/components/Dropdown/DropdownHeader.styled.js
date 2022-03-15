import styled, { css } from 'styled-components';

const crossStylesBefore = css`
    transform: translateX(5px) rotate(-45deg);
    width: 10px;
`;

const crossStylesAfter = css`
    transform: translateX(5px) rotate(45deg);
    width: 10px;
`;

const StyledDropdownHeader = styled.p`
    align-items: center;
    color: #5e5e5e;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding-right: 15px;
    position: relative;
    text-align: center;
    width: 100%;

    ::before,
    ::after {
        background-color: #5e5e5e;
        content: '';
        display: inline-block;
        height: 1.5px;
        position: absolute;
        right: 2px;
        top: 50%;
        transform: translateY(-50%);
        transition: transform 0.3s ease-in-out;
        width: 8px;
    }

    ::before {
        transform: rotate(45deg);
        ${({ isOpen }) => isOpen && crossStylesBefore}
    }

    ::after {
        transform: translateX(5px) rotate(-45deg);
        ${({ isOpen }) => isOpen && crossStylesAfter}
    }
`;

export default StyledDropdownHeader;
