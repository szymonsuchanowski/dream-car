import styled, { css } from 'styled-components';

const activeArrowStyles = css`
    transform: translateX(5px) rotate(-45deg);
    width: 10px;
`;

const activeArrowStyles2 = css`
    transform: translateX(5px) rotate(45deg);
    width: 10px;
`;

const StyledDropdownHeader = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    padding-right: 15px;
    position: relative;
    ::before,
    ::after {
        content: '';
        position: absolute;
        right: 2px;
        top: 50%;
        background-color: black;
        width: 8px;
        height: 1px;
        transform: translateY(-50%);
        display: inline-block;
        transition: transform 0.4s linear;
    }
    ::before {
        transform: rotate(45deg);
        ${({ isOpen }) => isOpen && activeArrowStyles}
    }
    ::after {
        transform: translateX(5px) rotate(-45deg);
        ${({ isOpen }) => isOpen && activeArrowStyles2}
    }
`;

export default StyledDropdownHeader;
