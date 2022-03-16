import styled, { css } from 'styled-components';

const shadow = css`
    box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary),
        -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
`;

const shadowInset = css`
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary),
        inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
`;

const StyledDropdown = styled.div`
    align-items: center;
    border-radius: var(--radius-primary);
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    width: 100%;
    ${({ isOpen, isSelected }) => (isOpen || isSelected ? shadow : shadowInset)};

    :not(:first-child) {
        margin-top: 1.5rem;
    }
`;

export default StyledDropdown;
