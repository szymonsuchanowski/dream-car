import styled, { css } from 'styled-components';

const openListStyles = css`
    margin-top: 0;
    opacity: 1;
    transform: scaleY(1);
`;

const StyledDropdownList = styled.ul`
    background: var(--bg-primary);
    border-radius: var(--radius-secondary);
    display: flex;
    flex-direction: column;
    gap: 3px;
    left: 0;
    margin-top: -45%;
    opacity: 0;
    position: absolute;
    top: 43px;
    transform: scaleY(0);
    transition: opacity var(--transition-style), transform var(--transition-style),
        margin-top var(--transition-style), background-color var(--transition-style);
    width: 100%;
    z-index: ${({ order }) => order};
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
