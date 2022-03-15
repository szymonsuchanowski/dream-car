import styled from 'styled-components';

const StyledSummary = styled.div`
    color: #5e5e5e;
    font-size: 0.9rem;
    text-align: center;

    p {
        margin-bottom: 1rem;
    }

    > p > span {
        color: #5b0eeb;
        font-weight: 700;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export default StyledSummary;
