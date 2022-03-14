import styled, { css } from 'styled-components';

const openList = css`
    opacity: 1;
    transform: scaleY(1);
    margin-top: 0;
`;

const StyledDropdownList = styled.ul`
    border-radius: 8px;
    background: #e4ebf5;
    list-style: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 43px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
    opacity: 0;
    transform: scaleY(0);
    transition: opacity 0.4s linear, transform 0.4s linear, margin-top 0.4s linear;
    margin-top: -45%;
    ${({ isOpen }) => isOpen && openList}
`;

export default StyledDropdownList;
