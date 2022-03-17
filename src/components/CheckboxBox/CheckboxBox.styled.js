import styled, { css } from 'styled-components';

const shadow = css`
    box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary),
        -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
`;

const shadowInset = css`
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary),
        inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
`;

const StyledCheckboxBox = styled.div`
    align-items: center;
    border-radius: var(--radius-primary);
    border: none;
    display: flex;
    height: 40px;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding: 10px;
    transition: box-shadow var(--transition-style);
    width: 100%;
    ${({ isOn }) => (isOn ? shadow : shadowInset)};

    p {
        font-size: 0.95rem;
    }
`;

export default StyledCheckboxBox;
