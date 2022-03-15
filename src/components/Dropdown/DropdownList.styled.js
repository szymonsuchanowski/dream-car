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
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, margin-top 0.3s ease-in-out;
    width: 100%;
    z-index: 1;
    ${({ isOpen }) => isOpen && openListStyles}

    @media screen and (min-width: 400px) {
        margin-top: -35%;
        ${({ isOpen }) => isOpen && openListStyles}
    }

    @media screen and (min-width: 460px) {
        margin-top: -30%;
        ${({ isOpen }) => isOpen && openListStyles}
    }

    @media screen and (min-width: 550px) {
        margin-top: -25%;
        ${({ isOpen }) => isOpen && openListStyles}
    }

    @media screen and (min-width: 630px) {
        margin-top: -20%;
        ${({ isOpen }) => isOpen && openListStyles}
    }
`;

export default StyledDropdownList;
