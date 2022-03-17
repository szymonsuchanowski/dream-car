import styled, { css } from 'styled-components';

const shadow = css`
    box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary),
        -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
`;

const shadowInset = css`
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary),
        inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
`;

const StyledProgressBarItem = styled.li`
    align-items: center;
    background: var(--bg-primary);
    border-radius: 50%;
    border: none;
    color: ${({ isActive, isComplete }) =>
        isActive || isComplete ? 'var(--text-highlight)' : 'var(--text-user)'};
    display: flex;
    font-size: ${({ isComplete }) => (isComplete ? '1.4rem' : '1rem')};
    font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
    height: 40px;
    justify-content: center;
    transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : null)};
    transition: transform var(--transition-style), background-color var(--transition-style),
        box-shadow var(--transition-style);
    width: 40px;
    ${({ isComplete }) => (isComplete ? shadowInset : shadow)};

    :after {
        color: ${({ isActive }) => (isActive ? 'var(--text-highlight)' : 'var(--text-user)')};
        content: '${({ txt }) => txt}';
        filter: ${({ isComplete }) => (isComplete ? 'blur(1.5px)' : 'none')};
        font-size: 1rem;
        font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
        position: absolute;
        text-align: center;
        top: 45px;
        transition: filter var(--transition-style), color var(--transition-style);
    }
`;

export default StyledProgressBarItem;
