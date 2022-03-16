import styled from 'styled-components';

const StyledSummaryItem = styled.li`
    align-items: center;
    border-radius: var(--radius-primary);
    box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary),
        -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    span:first-child {
        color: ${({ isColor }) => (isColor ? 'var(--text-highlight)' : 'var(--text-primary)')};
    }

    span:last-child {
        color: ${({ isColor }) => (isColor ? 'var(--text-highlight)' : 'var(--text-user)')};
        font-weight: 700;
    }
`;

export default StyledSummaryItem;
