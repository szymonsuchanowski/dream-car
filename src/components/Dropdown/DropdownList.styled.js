import styled, { css } from 'styled-components';

const openListStyles = css`
    margin-top: 0;
    opacity: 1;
    transform: scaleY(1);
`;

const StyledDropdownList = styled.ul`
    background: #e4ebf5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    left: 0;
    list-style: none;
    margin-top: -45%;
    opacity: 0;
    position: absolute;
    top: 43px;
    transform: scaleY(0);
    transition: opacity 0.4s linear, transform 0.4s linear, margin-top 0.4s linear;
    width: 100%;
    z-index: 1;
    ${({ isOpen }) => isOpen && openListStyles}
`;

export default StyledDropdownList;
