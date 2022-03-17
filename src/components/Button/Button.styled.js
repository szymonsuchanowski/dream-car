import styled, { css } from 'styled-components';

const buttonStyles = css`
    background: var(--bg-primary);
    border-radius: var(--radius-primary);
    border: none;
    box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary),
        -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    color: var(--text-primary);
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding: 0.75rem 0;
    transition: color var(--transition-style), background-color var(--transition-style),
        box-shadow var(--transition-style);

    :active {
        box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary),
            inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    }

    @media screen and (min-width: 960px) {
        :hover {
            color: var(--text-highlight);
        }
    }
`;

const StyledButton = styled.button(buttonStyles);

const StyledSubmitButton = styled.input(buttonStyles);

export { StyledButton, StyledSubmitButton };
