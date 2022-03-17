import styled from 'styled-components';

const StyledWelcome = styled.div`
    color: var(--text-user);
    text-align: center;
    transition: color var(--transition-style);

    p {
        margin-bottom: 1.5rem;
    }

    span {
        color: var(--text-highlight);
        font-weight: 700;
        transition: color var(--transition-style);
    }
`;

export default StyledWelcome;
