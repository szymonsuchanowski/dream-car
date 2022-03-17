import styled from 'styled-components';

const StyledSummary = styled.div`
    color: var(--text-user);
    font-size: 0.9rem;
    text-align: center;
    transition: color var(--transition-style);

    p {
        margin-bottom: 1rem;
    }

    > p > span {
        color: var(--text-highlight);
        font-weight: 700;
        transition: color var(--transition-style);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export default StyledSummary;
